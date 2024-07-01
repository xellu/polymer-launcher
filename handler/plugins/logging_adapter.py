import logging
from logging import Logger as DefaultLogger
from core.logging import LoggingManager

from events import EventBus

def patch(log: DefaultLogger):
    logger = log.obj

    new_logger = LoggingManager(logger.name)
    if log.silence:
        logger.disabled = True
        return

    logger.info = new_logger.info
    logger.log = new_logger.info
    logger.debug = new_logger.debug
    logger.warning = new_logger.warning
    logger.error = new_logger.error
    logger.critical = new_logger.critical
    logger.fatal = new_logger.critical
    logger.exception = new_logger.error
    logger.log = new_logger.info


class LogData:
    def __init__(self, obj: DefaultLogger, silence=False):
        self.obj = obj
        self.silence = silence

#----------------

LOGS = [
    LogData(logging.getLogger("werkzeug"), silence=True),
    #add more here
]

@EventBus.on("ready")
def on_ready():
    for log in LOGS:
        patch(log)