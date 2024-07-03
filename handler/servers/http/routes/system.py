from ..router import v1system
from ..services.adapter import Reply, Require

from core import Config, Release, LatestRelease

from flask import request

@v1system.route("/", methods=["GET"])
def about():
    return Reply(
        server = Config.get("SERVER.NAME"),
        dev = Config.get("DEVMODE"),
        release = {
            "current": Release,
            "latest": LatestRelease,
            "is_outdated": Release != LatestRelease
        }
    )