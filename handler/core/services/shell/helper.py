
class CommandDescriptor:
    def __init__(self):
        self.commands = {}

    def command(self, name: str, description: str, usage: str):
        def decorator(func):
            data = {
                "name": name,
                "description": description,
                "usage": usage,
                "func": func
            }
            self.commands[name] = data
            return func
        return decorator
    
Helper = CommandDescriptor()