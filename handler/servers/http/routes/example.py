from ..router import v2example
from ..services.adapter import Reply, Require

from core import Database

from flask import request

@v2example.route("test")
def session_unprotected():
    #this route is NOT protected by the session service
    #anyone can access this route

    return Reply(message="This route is not protected by the session service")