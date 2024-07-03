from ..router import v1settings
from ..services.adapter import Reply, Require

from core.services.database.jsondb import Item
from core.templates.DatabaseSchemes import SettingsTemplate
from core.tools import to_long_config, to_short_config

from core import Database
from flask import request

@v1settings.route("/fetch", methods=["GET"])
def fetch_settings():
    #dump long version of settings
    settings = to_long_config(Database.get_database("settings").content[0], vars(SettingsTemplate()[0]))
    return Reply(**settings)

@v1settings.route("/values", methods=["GET"])
def fetch_settings_short():
    #dump short version of settings
    settings = Database.get_database("settings").content[0]
    return Reply(**vars(settings))

@v1settings.route("/push", methods=["POST"])
def push_settings():
    data = Require(request, settings=dict).body()
    if not data.ok:
        return Reply(**data.content), 400
    
    settings = Item(**data.content["settings"])
    Database.get_database("settings").content = [Item(**to_short_config(vars(settings)))]
    Database.get_database("settings").save()
    return Reply()