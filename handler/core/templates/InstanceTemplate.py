from ..services.database.jsondb.engine import item as Item

def InstanceTemplate():
    return Item(
        name = "New Instance",
        icon_path = "/Polymer.png",
        version_id = "1.0",

        is_running = False,
        path = "data/instances",

        settings = {
            "jvm_arguments": "-Xmx2G -Xms1G",
            "java_path": "java",
        }
    )