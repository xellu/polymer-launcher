import json

import flask
from flask import make_response

def Reply(**kwargs):
    r = make_response(json.dumps(kwargs))
    r.headers["Content-Type"] = "application/json"

    return r

def RawReply(**kwargs):
    return kwargs

class Response:
    def __init__(self, content: dict, ok: bool = True):
        self.content = content
        self.ok = ok

class Require:
    def __init__(self, request: flask.request, **kwargs) -> Response:
        """
        :param request: The request object from Flask
        :param kwargs: The required keys and their types

        Example:
            Require(request, name=str, age=int)
        
        Returns:
            type: Response
            Response.content: The data from the request
            Response.ok: Whether the request was valid or not

        Functions:
            .body(): Get the request body as JSON
            .headers(): Get the request headers
            .query(): Get the request query
            .form(): Get the request form

        This will require the request to have a JSON body with the keys "name" and "age" with the types str and int respectively.

        The types can be any type, such as str, int, float, dict, list, etc.
        Required keys can be in the body, headers, query, or form of the request.

        This will treat the request as a JSON body by default.

        """
        self.request = request
        self.kwargs = kwargs

    def validate(self, data: dict):
        for k, v in self.kwargs.items():
            if k not in data.keys():
                return Response(RawReply(error=f"Missing required value for {k}"), False)

            if type(data[k]) != v:
                return Response(RawReply(error=f"Invalid type for {k}, provided {type(k).__name__}, expected {v.__name__}"), False)
        
        return Response({})

    def body(self):
        data = self.request.get_data(as_text=True)

        try:
            data = json.loads(data)
        except:
            return Response(RawReply(error="Unable to parse request body"), False)    
        
        res = self.validate(data)
        if not res.ok:
            return res
        
        return Response(data)

    def headers(self):
        data = self.request.headers

        res = self.validate(data)
        if not res.ok:
            return res
        
        return Response(data)
    
    def query(self):
        data = self.request.args

        res = self.validate(data)
        if not res.ok:
            return res
        
        return Response(data)
    
    def form(self):
        data = self.request.form

        res = self.validate(data)
        if not res.ok:
            return res
        
        return Response(data)