from events import EventBus
from core.logging import LoggingManager

import os
import time
import threading

logger = LoggingManager("Core.Events")

@EventBus.on("shutdown")
def shutdown(reason: str = None):
    threading.Thread(target=shutdown_thread, args=(reason,)).start()
    
def shutdown_thread(reason: str = None):
    try:
        start_time = time.time()

        logger.info(f"Core shutdown requested ({reason or 'no reason provided'})")

        from servers import http, socket

        from core import Database

        Database.stop()

        logger.info("Waiting for servers to stop")
        while True:
            if not http.Server.running and not socket.Server.running:
                break

            time.sleep(0.1)

            if time.time() - start_time > 10:
                logger.warning("Server shutdown timed out, killing processes")
                break

        logger.success("Servers offline, shutting down core")
        os._exit(0)
    except Exception as e:
        logger.error(f"Failed to shutdown core, overriding ({e})")
        EventBus.signal("error", e, "Core.Events", "Failed to shutdown core", fatal=True)

@EventBus.on("shutdown.force")
def force_shutdown(reason: str = None):
    logger.warning(f"Force shutdown requested ({reason or 'no reason provided'})")
    os._exit(0)

@EventBus.on("shutdown.crash")
def crash_shutdown(reason: str = None):
    logger.error(f"Core crash protocol initiated")
    logger.error(f"Exit Message: {reason}")
    os._exit(1)