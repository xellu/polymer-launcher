from ..services.database.jsondb.engine import item as Item

def InstanceTemplate():
    return Item(
        name = "New Instance", #name of the instance
        icon_path = "/Polymer.png", #path to instance icon
        version_id = "1.0", #game version

        path = "data/instances", #path to the instance
        game_executable = "minecraft.jar", #name of the game executable

        meta = {}, #meta data (ex. is_downloading, is_running, etc.)
        settings = {
            "jvm_arguments": {
                "ram": "-Xmx2G -Xms1G", #ram allocation
                "custom": "" #custom jvm arguments
            },
            "java_path": "java", #path to java executable
        }
    )