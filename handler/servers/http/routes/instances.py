from ..router import v1instances
from ..services.adapter import Reply, Require

from .installer import VERSIONS, download_game, download_status

from core.tools import RandomStr, ReplaceUnicode
from core.services.database.jsondb import Item
from core import Database, Release, LatestRelease
from core.templates.InstanceTemplate import InstanceTemplate

from flask import request, send_file
import os
import requests

#create instance page-----------------
@v1instances.route("/versions", methods=["GET"])
def get_versions():
    versions = []
    latest = VERSIONS.get("latest", {}).get("release", {})

    for version in VERSIONS.get("versions", []):
        versions.append({
            "id": version.get("id"),
            "type": version.get("type"),
        })

    return Reply(versions=versions, latest=latest)

@v1instances.route("/icons", methods=["GET"])
def get_icons():
    icons = os.listdir("data/icons")
    return Reply(icons=icons)

@v1instances.route("/icons/upload", methods=["POST"])
def upload_icon():
    file = request.files.get("icon")
    extension = file.filename.split(".")[-1]

    file.save(f"data/icons/{RandomStr(16)}.{extension}")
    return Reply()

@v1instances.route("/icons/<icon_name>", methods=["GET"])
def get_icon(icon_name):
    if ".." in icon_name or "/" in icon_name:
        return Reply(error="Invalid icon name"), 400
    
    if not os.path.exists(f"data/icons/{icon_name}"):
        return Reply(error="Icon not found"), 404
    
    return send_file(f"data/icons/{icon_name}")

@v1instances.route("/create", methods=["POST"])
def create_instance():
    data = Require(request, name=str, version_id=str, icon_path=str, identifier=str).body()
    if not data.ok:
        return Reply(**data.content), 400
    
    instance = InstanceTemplate()
    instance.name = data.content.get("name")
    instance.path = f"data/instances/{ReplaceUnicode(instance.name)}_{RandomStr(8)}"

    instance.version_id = data.content.get("version_id")
    instance.icon_path = data.content.get("icon_path")

    Database.get_database("instances").create(instance)
    Database.get_database("instances").save()

    if not os.path.exists(instance.path):
        os.makedirs(instance.path)
    
    res = download_game(instance.version_id, instance.path, data.content.get("identifier"))
    if res != True:
        return Reply(error=res), 400

    return Reply()

@v1instances.route("/create/<identifier>/status", methods=["GET"])
def get_download_status(identifier):
    return Reply(status=download_status.get(identifier, 0))

#instances page---------------------

@v1instances.route("/", methods=["GET"])
def get_instances():
    instances = Database.get_database("instances").content
    return Reply(
        instances = [vars(instance) for instance in instances]
    )

@v1instances.route("/<instance_id>", methods=["GET"])
def get_instance(instance_id):
    instance = Database.get_database("instances").find("DATAFORGE_UUID", instance_id)
    if not instance:
        return Reply(error="Instance not found"), 404
    
    return Reply(**vars(instance))

@v1instances.route("/<instance_id>/edit", methods=["POST"])
def edit_instance(instance_id):
    instance = Database.get_database("instances").find("DATAFORGE_UUID", instance_id)
    if not instance:
        return Reply(error="Instance not found"), 404
    
    data = Require(request, instance=dict).body()
    if not data.ok:
        return Reply(**data.content), 400
    
    for k, v in data.content.get("instance").items():
        setattr(instance, k, v)

    Database.get_database("instances").save()
    return Reply()

@v1instances.route("/<instance_id>/openfolder", methods=["POST"])
def open_folder(instance_id):
    instance = Database.get_database("instances").find("DATAFORGE_UUID", instance_id)
    if not instance:
        return Reply(error="Instance not found"), 404
    
    path = instance.path.replace("/", "\\") if os.name == "nt" else f"xdg-open {instance.path}"

    os.system(f"start {path}")
    return Reply()