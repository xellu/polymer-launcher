from ..router import v1instances
from ..services.adapter import Reply, Require

from flask import request, send_file
import os
import requests

@v1instances.route("/versions", methods=["GET"])
def get_versions():
    r = requests.get("https://piston-meta.mojang.com/mc/game/version_manifest_v2.json")
    if r.status_code != 200:
        return Reply(error="Failed to fetch versions"), 500
    
    versions = []
    latest = r.json().get("latest", {}).get("release", {})

    for version in r.json().get("versions", []):
        versions.append({
            "id": version.get("id"),
            "type": version.get("type"),
        })

    return Reply(versions=versions, latest=latest)

@v1instances.route("/icons", methods=["GET"])
def get_icons():
    icons = os.listdir("data/icons")
    return Reply(icons=icons)

@v1instances.route("/icons/<icon_name>", methods=["GET"])
def get_icon(icon_name):
    if ".." in icon_name or "/" in icon_name:
        return Reply(error="Invalid icon name"), 400
    
    if not os.path.exists(f"data/icons/{icon_name}"):
        return Reply(error="Icon not found"), 404
    
    return send_file(f"data/icons/{icon_name}")