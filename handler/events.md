# Disclaimer
- All events are subject to change and may not be accurate. This is a work in progress and will be updated as needed.
- All event buses are an instance of class `EventManager` and can be accessed via `events.<bus_name>`, you may create your own by making a new instance of `EventManager`

# Events for EventBus
> EventBus is a main event system that is used to handle events in the server

## Core Events
ready - called when server core is initialized
error <error: Exception> <source: str> [message:str] [fatal:bool] - called when an error occurs
inject <plugin_name: str> - called when a plugin is injected

shutdown [reason:str] - used to shutdown the server
shutdown.force [reason:str] - used to force shutdown of the server (data loss may occur)
shutdown.crash [reason:str] - used to shutdown the server due to a crash

## LoggerManager Events
logger.write <content: dict> - called anytime a logging action is dispatched

## ConfigManager Events
config.get <key: str> - called when a config value is requested
config.set <key: str> <value: any> - called when a config value is set
config.delete <key: str> - called when a config value is deleted
config.save - called when the config is saved
config.load <data: dict> - called when the config is loaded

## DatabaseService Events
database.ready <self: DatabaseService> - called when the database successfully connects

# Events for ShellEventBus
> ShellEventBus is a special event system that is used to handle shell commands
- Note: 

(command_name) [*args] [**kwargs] - called when a command is executed

# Events for PacketBus
> PacketBus is a special event system that is used to handle packets

(packet_id) <client> <payload> - called when a packet is received
