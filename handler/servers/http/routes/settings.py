from ..router import v1settings
from ..services.adapter import Reply, Require

from core import Database
from flask import request

@v1settings.route("/fetch", methods=["GET"])
def fetch_settings():
    #dump long version of settings
    settings = Database.get_database("settings").content[0]
    return Reply(**vars(settings))