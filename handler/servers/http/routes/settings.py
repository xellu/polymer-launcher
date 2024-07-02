from ..router import v1settings
from ..services.adapter import Reply, Require

from core.services.database.jsondb import Item
from core.templates.DatabaseSchemes import SettingsTemplate

from core import Database
from flask import request
from copy import deepcopy

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

#config conversions----
def to_short_config(long_config, categories=None):
    values = {}

    for category, items in long_config.items():
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

def to_long_config(short_config, template):
    long_config = deepcopy(template)
    for category in long_config:
        if not isinstance(category, dict):
            continue

        settings = category.get("settings", [])
        if not isinstance(settings, list) or not settings:
            continue

        for setting in settings:
            if not isinstance(setting, dict):
                continue

            if setting.get("id") is None:
                continue

            setting["value"] = short_config.get(setting["id"], setting.get("value"))
    
    long_config.pop("DATAFORGE_UUID", None)
    return long_config