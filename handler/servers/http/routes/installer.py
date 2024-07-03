import requests
import os

VERSIONS = requests.get("https://piston-meta.mojang.com/mc/game/version_manifest_v2.json").json()
download_status = {
    #"path": 0-100 (percentage)
}

def download_game(version, path, external_id) -> str | bool:
    """
        Downloads the minecraft game files

        :version: str: The version of the game to download
        :path: str: The path to download the game to
    """


    if not os.path.exists(path):
        os.makedirs(path)

    # Download game files
    version_data = None
    for v in VERSIONS["versions"]:
        if v["id"] == version:
            version_data = v
            break

    if not version_data:
        return "Invalid version"
    
    version_data = requests.get(version_data["url"]).json()
    if not version_data:
        return "Unable fetch version data"
    

    for directory in ["resourcepacks", "mods", "saves", "shaderpacks", "libraries", "assets", "versions", f"versions/{version}"]:
        os.makedirs(f"{path}/{directory}", exist_ok=True)

    download_file(version_data["downloads"]["client"]["url"], f"{path}/versions/{version}/client.jar", external_id, "client")
    
    # Download libraries, natives & create their paths
    libraries = version_data["libraries"]
    for index, library in enumerate(libraries):
        if not validate_rules(library.get("rules", [])):
            continue

        if "downloads" not in library:
            continue

        if "artifact" in library["downloads"]:
            libpath = f"{path}/libraries/"+library["downloads"]["artifact"]["path"]
            os.makedirs("/".join(libpath.split("/")[:-1]), exist_ok=True)

            url = library["downloads"]["artifact"]["url"]
            download_file(url, libpath, external_id, f"Library: {index+1}/{len(libraries)}")

        if "natives" in library:
            native = library["natives"].get(get_native_platform())
            if library["downloads"]["classifiers"].get(native):
                libpath = f"{path}/libraries/"+library["downloads"]["classifiers"][native]["path"]
                os.makedirs("/".join(libpath.split("/")[:-1]), exist_ok=True)

                url = library["downloads"]["classifiers"][native]["url"]
                download_file(url, libpath, external_id, f"Library: {index+1}/{len(libraries)}")

    # Download assets
    assets = version_data["assetIndex"]
    r = requests.get(assets["url"])
    if r.status_code != 200:
        return "Failed to download assets"
    
    assets = r.json()
    
    # run_game(path, version, external_id)
    return True

def run_game(path, version, external_id) -> str | bool:
    """
        Runs the game with the specified version

        :path: str: path .minecraft folder
        :version: str: The version of the game to run
        :external_id: str: The external id of the game
    """

    if not os.path.exists(f"{path}/versions/{version}/client.jar"):
        return "Game files not found"
    
    # Run the game
    os.system(f"java -jar {path}/versions/{version}/client.jar") #does not work for shit



def download_file(url, path, external_id, file_display_overwrite: None|str = None):
    r = requests.get(url, stream=True)
    if r.status_code != 200:
        return "Failed to download game files"
    
    total_length = r.headers.get('content-length')

    if total_length is None:  # No content length header
        with open(path, "wb") as f:
            f.write(r.content)
    else:
        dl = 0
        total_length = int(total_length)
        with open(path, "wb") as f:
            for chunk in r.iter_content(chunk_size=4096):
                dl += len(chunk)
                f.write(chunk)
                done = int(50 * dl / total_length)
                download_status[external_id] = {
                    "progress": done,
                    "file": path.split("/")[-1] if not file_display_overwrite else file_display_overwrite
                }
        
        del download_status[external_id]

    return True

def get_native_platform():
    return { #pray it works frfr
        "win32": "windows",
        "win64": "windows",
        "nt": "windows",
        "linux": "linux",
        "osx": "osx"
    }.get(os.name) or "linux"

def validate_rules(rules):
    for rule in rules:
        if "action" in rule and "os" in rule:
            if rule["action"] == "allow":
                if rule["os"]["name"] == get_native_platform():
                    return True
            elif rule["action"] == "disallow":
                if rule["os"]["name"] == get_native_platform():
                    return False
        elif "action" in rule:
            if rule["action"] == "allow":
                return True
            elif rule["action"] == "disallow":
                return False

    return True