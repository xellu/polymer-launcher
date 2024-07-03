import requests

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
    
    version_data = None
    for v in VERSIONS.get("versions", []):
        if v.get("id") == version:
            version_data = v.get("url")

    if not version_data:
        return "Game version not found"

    r = requests.get(version_data)
    if r.status_code != 200:
        return "Failed to fetch game files"
    
    version_data = r.json()
    client = version_data.get("downloads", {}).get("client", {}).get("url")
    
    if not client:
        return "Failed find client download url"
    
    r = requests.get(client, stream=True)
    if r.status_code != 200:
        return "Failed to download game files"
    
    total_length = r.headers.get('content-length')

    if total_length is None:  # No content length header
        with open(f"{path}/minecraft.jar", "wb") as f:
            f.write(r.content)
    else:
        dl = 0
        total_length = int(total_length)
        with open(f"{path}/minecraft.jar", "wb") as f:
            for chunk in r.iter_content(chunk_size=4096):
                dl += len(chunk)
                f.write(chunk)
                done = int(50 * dl / total_length)
                download_status[external_id] = done
        
        del download_status[external_id]

    return True