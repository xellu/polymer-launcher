from ..services.database.jsondb.engine import item as Item

def InstanceTemplate():
    return Item(
        name = "New Instance",
        path = "data/instances",

        version_id = "1.0",
        icon_path = "/Polymer.png",

        settings = {
            "jvm_arguments": "-Xmx2G -Xms1G",
            "java_path": "java",
        }
    )