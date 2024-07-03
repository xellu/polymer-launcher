from core import Config, Release
from core.logging import LoggingManager

logger = LoggingManager("Server.HTTP")
logger.info("Initializing HTTP server")


from events import EventBus

from .routes import (settings, instances, system)
from .router import App

from .services.adapter import Reply

import threading
import waitress

import flask
from flask import request, cli

success_codes = range(100, 399)
warning_codes = range(400, 499)

class HTTPServer:
    def __init__(self):
        self.running = False
        self.ready = False

        self.thread = None 

    def start(self):
        self.running = True

        self.thread = threading.Thread(target=self.run).start()

    def run(self):

        if Config.get("DEVMODE"):
            logger.debug(f"CAUTION: Running {Config.get('SERVER.NAME')}@{Release} in development mode")
            
            cli.show_server_banner = self.on_load
            App.run(
                host = Config.get("HTTP.HOST"),
                port = Config.get("HTTP.PORT")
            )
        else:
            logger.info(f"Running {Config.get('SERVER.NAME')}@{Release} in production mode")

            self.on_load()
            waitress.serve(
                App,
                host = Config.get("HTTP.HOST"),
                port = Config.get("HTTP.PORT"),
            )


    def on_load(self, *args, **kwargs):
        logger.success(f"Running HTTP Server on port {Config.get('HTTP.PORT')}")
        EventBus.signal("http.start")
        self.ready = True

    @App.before_request
    def before_request():
        if not Server.ready:
            return Reply(error="Service is powering up, retry in a few seconds"), 503

        request.remote_addr = request.headers.get(Config.get("HTTP.REAL.IP", "X-Real-IP"), request.remote_addr)

    @App.after_request
    def after_request(res):
        res.headers["N-Server"] = "Nautica"

        message = f"{request.remote_addr}: {request.method} -> {request.path} ({res.status_code})"
        if res.status_code in success_codes:
            logger.info(message)
        elif res.status_code in warning_codes:
            logger.warn(message)
        else:
            logger.error(message)

        return res

    @EventBus.on("shutdown")
    def on_shutdown(reason: str | None = None):
        Server.running = False
        
        if Server.thread:
            Server.thread.join()

Server = HTTPServer()

