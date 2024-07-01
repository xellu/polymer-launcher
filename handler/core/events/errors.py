from events import EventBus
from core.logging import LoggingManager
from core.shared import CoreStats

import traceback

logger = LoggingManager("Core.Events")

fallback = {
    "source": "Nautica API",
    "message": "An error occurred in the Nautica API",
}

@EventBus.on("error")
def error_callback(error: Exception, source: str = fallback["source"], message: str = fallback["message"], fatal: bool = False):
    logger.error(f"Error in {source}: {error}")

    if CoreStats.config and CoreStats.config.get("DEVMODE"):
        traceback.print_exc()

    if fatal:
        EventBus.signal("shutdown.crash", f"Fatal error in {source}: {message}")