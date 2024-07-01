# Project Nautica
A High-performance, modular and scalable web server written in Python.

## Features
- Plugin API
- Event System
- Config Manager
- Logger Manager
- Database Service
- HTTP Server
- Socket Server

## Plugins
The Plugin system is a core feature of Nautica. It allows developers to extend the functionality of the server by creating plugins.
Plugins are injected into the server at startup.

By hooking into the event system, or server core, plugins can interact with the server in a variety of ways.

## Config Manager
You can access core config values using the Config Manager, or create your own configs.

### Core Config
```py
from core import Config

# Get a core config value
value = Config.get('key')
```

### Custom Config
```py
from core.config import ConfigManager

# Create a new config
config = ConfigManager('path/to/your-config.json')
```

## Logger Manager
The Logger Manager allows you to log messages to the console and to a file.

### Creating a Logger
```py
from core.logging import LoggingManager

# Create a new logger
logger = LoggingManager("Plugin.Name")

# Log a message
logger.info("Hello, World!")
```

## Database Service
The Database Service allows you to interact with a mongodb database. It will automatically connect to the database when the server starts.

## HTTP Server
The HTTP Server is a core feature of Nautica. It allows you to create Web APIs and serve static files.

You can disable the HTTP Server by commenting out `threading.Thread(target=run_http).start()` in `main.py`.

### Creating a Route
An example routes that return a JSON response are available in `servers/http/routes/example.py`

### Creating a Blueprint (Group of Routes)
An example blueprint is available in `servers/http/router.py`

## Socket Server
The Socket Server is a core feature of Nautica. It allows you to communicate with a client over a socket connection.
The server uses a packet system (PacketBus) based off of the Event System.

You can disable the Socket Server by commenting out `threading.Thread(target=run_socket).start()` in `main.py`.

### Creating a Socket Event
An example socket event is available in `servers/socket/packets/example.py`


