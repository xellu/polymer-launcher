import random
import string
import hashlib
from copy import deepcopy

from .config import ConfigManager

def RandomStr(length: int=8):
    return ''.join(random.choices(string.ascii_letters + string.digits, k=length))

def HashStr(text: str):
    return hashlib.sha256(text.encode()).hexdigest()

def LoadPlaceholders(text: str, config: ConfigManager):
    for key, value in config.data.items():
        text = text.replace(f"%{key}%", str(value))

    return text

def HasUnicode(text: str):
    for char in text:
        if char not in string.ascii_letters + string.digits + "_":
            return True
    return False

def ReplaceUnicode(text: str):
    return ''.join([char if char in string.ascii_letters + string.digits + "_" else "_" for char in text])

def convert_to_dict(obj):
    return vars(obj)

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
    short_config = convert_to_dict(short_config)

    for _, category in long_config.items():
        if not isinstance(category, list):
            continue

        for subcategory in category:
            settings = subcategory.get("settings", [])
            if not isinstance(settings, list) or not settings:
                continue

            for setting in settings:
                if not isinstance(setting, dict):
                    continue

                if setting.get("id") is None:
                    continue
                
                setting["value"] = short_config.get(setting["id"])
        
    long_config.pop("DATAFORGE_UUID", None)
    return long_config