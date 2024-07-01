from events import ShellEventBus, EventBus
from core.logging import LoggingManager

import threading
from .commands import basic

logger = LoggingManager("Service.Shell")

class ShellSource:
    def __init__(self, name: str, external: bool = False):
        self.name = name
        self.external = external

class ShellService:
    def __init__(self, source: ShellSource=ShellSource('undefined')):
        self.running = False
        self.source = source

        if type(source) is not ShellSource:
            EventBus.signal("shutdown.crash", f"Invalid source for Service.Shell: {type(source).__name__}")

        self.thread = None

    def start(self):
        EventBus.signal("shell.ready", self)
        
        logger.info(f"Starting new Shell Service instance ({self.source.name})")

        self.thread = threading.Thread(target=self.loop)
        self.thread.start()

    def stop(self):
        logger.info("Stopping Shell Service")

    def loop(self):
        while True:
            try:
                command = input("")
                if len(command.replace(" ", "")) == 0: continue

                data = self.parse_data(command)
                res = self.run_command(data)

                if not res:
                    logger.warning("Command not found")

            except Exception as err:
                if str(err) == "":
                    EventBus.signal("shutdown", "Requested by admin")
                
                else:
                    EventBus.signal("error", err, f"Shell Service for {self.source.name}", fatal=False)
                    logger.error(f"Error in Shell Service: {err}")
    
    @ShellEventBus.on("respond")
    def on_respond(self, command: str, message: str):
        logger.info(f"{command} -> {message}")

    def run_command(self, data: dict):
        return ShellEventBus.signal(data["command"], *data["args"], **data["flags"])

    def parse_data(self, command: str):
        #format: command arg --flag
        data = command.split(" ")
        out = {
            "command": data[0],
            "args": [],
            "flags": {}
        }

        for i in range(1, len(data)):
            if data[i].startswith("--"):
                out["flags"][data[i][2:]] = True
            else:
                out["args"].append(data[i])
        
        return out