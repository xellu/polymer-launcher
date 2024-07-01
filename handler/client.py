import socket
import json
import threading

class Client:
    def __init__(self, ip: str, port: int):
        self.ip = ip
        self.port = port

        self.client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    def connect(self):
        self.client.connect((self.ip, self.port))
        print("Connected to server")

    def send(self, data: dict):
        print(f"Sending: {data}")
        self.client.send(json.dumps(data).encode())
    
    def read(self):
        print(f"Reading from server")
        self.send({"id": "hello"})
        
        while True:
            data = self.client.recv(65536)
            if not data:
                break

            print(f"Received: {data.decode()}")

    def close(self):
        try:
            self.client.close()
        except:
            pass

def shell():
    while True:
        try:
            command = input("")
            if command == "exit":
                client.close()
        except:
            client.close()

client = Client("localhost", 3100)
client.connect()
client.read()
