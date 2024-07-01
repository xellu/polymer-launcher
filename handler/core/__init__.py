from .config import ConfigManager
from .templates.ConfigTemplate import ConfigTemplate
from .logging import LoggingManager

from .services.shell import ShellService, ShellSource
from .services.database import DatabaseService

from events import EventBus
from .events import (shutdown, errors)

import os
import time
import threading
from .shared import CoreStats

Release = "1.0.0~Tritium+Polymer"

Core = LoggingManager("Core.Main")

# load config
Config = ConfigManager("config.json", template=ConfigTemplate)

Core.info(f"Running {Config.get('SERVER.NAME')}, release {Release}")

# load plugins
if os.path.exists("plugins"):
    loaded_plugins = 0
    for plugin in os.listdir("plugins"):
        if not plugin.endswith(".py"): continue

        __import__(f"plugins.{plugin[:-3]}")

        loaded_plugins += 1
        EventBus.signal("inject", plugin[:-3])

    Core.success(f"Injected {loaded_plugins} plugins")

# load services
Shell = ShellService(ShellSource("Core"))
Shell.start()

Database = DatabaseService(Config, [
    "settings"
])
Database.start()

Core.info("Waiting for services to come online...")
Core.warn("CAUTION: Do not stop, restart or kill the server while services are starting up")

#ready listener---------------------------------------------------------------
def wait_for_services():
    notifiers = [30, 60, 120, 300, 600]
    max_notifiers = len(notifiers)
    start_time = time.time()

    while True:
        time.sleep(1)

        if not notifiers:
            Core.fatal("Services took too long to come online, possible deadlock, shutting down...")
            EventBus.signal("shutdown.crash", "Services took too long to come online, possible deadlock")

        if time.time() - start_time > notifiers[0]:
            notifiers.pop(0)
            if len(notifiers) < 3:
                Core.fault(f"Services are taking too long to come online, scheduled shutdown in {(notifiers[-1] - time.time() + start_time)/60:.1f} minutes")
                continue

            Core.warn(f"Services are taking too long to come online, please check the logs for errors ({max_notifiers - len(notifiers)}/{max_notifiers})")
            
        # if not CoreStats.database_service_loaded:
        #     continue

        Core.success("All services are online, server is ready")
        EventBus.signal("ready")
        break


threading.Thread(target=wait_for_services).start()

#event listeners--------------------------------------------------------------
@EventBus.listen_all
def on_event(event: str, *args, **kwargs):
    if Config.get("DEVMODE"):
        Core.debug(f"Event {event} emitted with args {args} and kwargs {kwargs}")

@EventBus.on("database.ready")
def on_database_ready(*args):
    CoreStats.database_service_loaded = True


#overload prevention----------------------------------------------------------
CoreStats.amount_of_calls += 1
if CoreStats.amount_of_calls > 1:
    Core.critical("Core has been initialized more than once, please check for duplicate imports!")
    EventBus.signal("shutdown.crash", "Core has been initialized more than once, please check for duplicate imports!")

CoreStats.config = Config