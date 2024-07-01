from events import PacketBus
from core.logging import LoggingManager

import time

logger = LoggingManager("Server.Socket")

@PacketBus.on("heartbeat")
def heartbeat(client, data):
    client.last_heartbeat = time.time()

@PacketBus.on("hello")
def hello(client, data):
    logger.success(f"{client.ip}: Received hello packet")
    client.send(id="hello", data="world")