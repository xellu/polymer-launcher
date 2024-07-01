from core.logging import LoggingManager
from core import Config

from events import EventBus, PacketBus

import time
import json
import socket
import threading

from .packets import (example)

logger = LoggingManager("Server.Socket")
logger.info("Initializing Socket server")

class SocketClient:
    def __init__(self, conn, addr):
        self.client = conn

        self.ip = addr[0]
        self.port = addr[1]

        self.running = False
        self.last_heartbeat = 0

        self.threads = []
    
    def handle(self): 
        self.running = True

        t1 = threading.Thread(target=self.read_loop)
        t2 = threading.Thread(target=self.event_loop)

        self.threads.append(t1)
        self.threads.append(t2)

        t1.start()
        t2.start()

    def event_loop(self):
        logger.info(f"{self.ip}: Connection established (on {self.port})")
        self.last_heartbeat = time.time()

        while True:
            if not self.running:
                break

            if time.time() - self.last_heartbeat > 30:
                self.drop("timed out")
                break

            time.sleep(1)

    def read_loop(self):
        while True:
            if not self.running:
                break

            try:
                data = self.client.recv(65536)
            except ConnectionAbortedError:
                self.drop("connection aborted")
                break

            except ConnectionResetError:
                self.drop("connection reset")
                break

            except Exception as e:
                self.drop(f"crashed ({e})")
                break

            if not data:
                self.drop("no data received")
                break
            
            try:
                payload = json.loads(data.decode())
                if not payload.get('id'):
                    self.drop("no packet id")
                    break
            except:
                self.drop("corrupted data")
                break

            try:
                processed = PacketBus.signal(payload["id"], self, payload)            
            except Exception as e:
                self.drop(f"handler crashed ({e})")
                break

            if not processed:
                self.send(id="error", content="Packet not processed")

    def send(self, **kwargs):
        self.client.send(json.dumps(kwargs).encode())

    def drop(self, reason: str = "dropped"):
        self.running = False
        logger.info(f"{self.ip}: Disconnected, {reason}")

        try:
            self.client.close()
        except: pass
        
        threading.Thread(target=self.kill).start()


    def kill(self):
        self.running = False

        for thread in self.threads:
            # logger.info(f"{self.ip}: Killing thread {thread.name}")
            thread.join()

class SocketServer:
    def __init__(self):
        self.running = False

    def start(self):
        self.running = True

        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            s.bind((Config.get("HTTP.HOST"), Config.get("SOCK.PORT")))
            s.listen()

            while True:
                conn, addr = s.accept()

                client = SocketClient(conn, addr)
                client.handle()

    @EventBus.on("shutdown")
    def on_shutdown(reason: str | None = None):
        Server.running = False

Server = SocketServer()