from colorama import Fore
import time
import json
import os

from events import EventBus

class Severity:
    DEBUG = -1
    SUCCESS = 0
    INFO = 1
    WARNING = 2
    ERROR = 3
    CRITICAL = 4

Colors = {
    Severity.DEBUG: Fore.MAGENTA,
    Severity.SUCCESS: Fore.GREEN,
    Severity.INFO: Fore.BLUE,
    Severity.WARNING: Fore.YELLOW,
    Severity.ERROR: Fore.RED,
    Severity.CRITICAL: Fore.LIGHTRED_EX
}

Labels = {
    Severity.DEBUG: "DEBUG",
    Severity.SUCCESS: "OK",
    Severity.INFO: "INFO",
    Severity.WARNING: "WARNING",
    Severity.ERROR: "FAULT",
    Severity.CRITICAL: "FATAL",
}

path = f".logs/{time.strftime('%Y-%m-%d_%H-%M-%S')}.log"
if not os.path.exists(".logs"):
    os.mkdir(".logs")

class LoggingManager:
    def __init__(self, module_name: str, timeformat: str = "%d-%m-%Y %H:%M:%S", path_override: str = None):
        self.name = module_name
        self.timeformat = timeformat

        self.memory = []
        self.path = path_override if path_override else path

        if not os.path.exists(self.path):
            with open(self.path, 'x') as f: f.write("")

    def log(self, message: str, severity: int | Severity = Severity.INFO):
        """
        Log a message.

        Args:
            message (str): The message to be logged.
            severity (int | Severity): The severity of the message.

        Returns:
            None
        """
        if isinstance(severity, Severity):
            severity = severity.value

        content = {
            "message": str(message),
            "severity": severity,
            "timestamp": {
                "raw": time.time(),
                "formatted": self.generate_timestamp()
            }
        }
        print(f"{Fore.LIGHTBLACK_EX}[{content['timestamp']['formatted']}] {Colors.get(severity, Fore.CYAN)}[{self.name.upper()}] {Fore.RESET}{content['message']}")

        with open(self.path, 'a') as f:
            f.write("\n" + json.dumps(content))

        EventBus.signal("logger.write", content)

    def debug(self, message: str):
        """
        Log a debug message.

        Args:
            message (str): The message to be logged.

        Returns:
            None
        """
        self.log(message, Severity.DEBUG)

    def info(self, message: str):
        """
        Log an info message.

        Args:
            message (str): The message to be logged.

        Returns:
            None
        """
        self.log(message, Severity.INFO)
    announce = info

    def warning(self, message: str):
        """
        Log a warning message.

        Args:
            message (str): The message to be logged.

        Returns:
            None
        """
        self.log(message, Severity.WARNING)
    warn = warning

    def error(self, message: str):
        """
        Log an error message.

        Args:
            message (str): The message to be logged.

        Returns:
            None
        """
        self.log(message, Severity.ERROR)
    fail = error
    fault = error

    def critical(self, message: str):
        """
        Log a critical message.

        Args:
            message (str): The message to be logged.

        Returns:
            None
        """
        self.log(message, Severity.CRITICAL)

    fatal = critical

    def success(self, message: str):
        """
        Log a success message.

        Args:
            message (str): The message to be logged.

        Returns:
            None
        """
        self.log(message, Severity.SUCCESS)
    ok = success

    def generate_timestamp(self):
        try:
            return time.strftime(self.timeformat, time.localtime())
        except:
            return time.strftime("%d-%m-%Y %H:%M:%S", time.localtime())