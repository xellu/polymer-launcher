from ..router import v1settings
from ..services.adapter import Reply, Require

from core.services.database.jsondb import Item
from core import Database
from flask import request
from copy import deepcopy

@v1settings.route("/fetch", methods=["GET"])
def fetch_settings():
    #dump long version of settings
    settings = vars(deepcopy(Database.get_database("settings")).content[0])
    settings.pop("DATAFORGE_UUID", None)

    return Reply(**settings)

@v1settings.route("/values", methods=["GET"])
def fetch_settings_short():
    #dump short version of settings
    settings = Database.get_database("settings").content[0]
    return Reply(**to_short_config(vars(settings)))

@v1settings.route("/push", methods=["POST"])
def push_settings():
    data = Require(request, settings=dict).body()
    if not data.ok:
        return Reply(**data.content), 400
    
    settings = Item(**data.content["settings"])
    Database.get_database("settings").content = [settings]
    Database.get_database("settings").save()
    return Reply()

#config conversions----
def to_short_config(config, categories=None):
    values = {}

    for category, items in config.items():
        if categories and category not in categories:
            continue

        if not isinstance(items, list):
            # print(f"Category {category} is not a list")
            continue

        for option in items:
            if not isinstance(option, dict):
                # print(f"Option {option} is not a dictionary")
                continue

            settings = option.get("settings", [])
            if not isinstance(settings, list) or not settings:
                # print(f"Settings {settings} is not a list")
                continue

            for setting in settings:
                if not isinstance(setting, dict):
                    # print(f"Setting {setting} is not a dictionary")
                    continue

                if setting.get("id") is None:
                    # print(f"Setting {setting} has no id")
                    continue

                values[setting["id"]] = setting["value"]
    return values