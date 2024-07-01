import uuid

class item:
    def __init__(self, **kwargs):
        for var, val in kwargs.items():
            setattr(self, var, val)
        self.DATAFORGE_UUID = _id()
            
def _id():
    return str(uuid.uuid4())