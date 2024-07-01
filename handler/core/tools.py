import random
import string
import hashlib

from .config import ConfigManager

def RandomStr(length: int=8):
    return ''.join(random.choices(string.ascii_letters + string.digits, k=length))

def HashStr(text: str):
    return hashlib.sha256(text.encode()).hexdigest()

def LoadPlaceholders(text: str, config: ConfigManager):
    for key, value in config.data.items():
        text = text.replace(f"%{key}%", str(value))

    return text