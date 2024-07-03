from ..services.database.jsondb.engine import item as Item
from core.tools import to_short_config, convert_to_dict

def SettingsTemplate():
    return [Item(
        launcher = [
            {
                "name": "Preferences",
                "icon": "bi bi-sliders",
                "settings": [
                    {
                        "id": "showSnapshots",
                        "type": "switch",
                        "label": "Show Snapshots",
                        "value": False
                    },
                    {
                        "id": "showUpdateNotifications",
                        "type": "switch",
                        "label": "Show Update Notifications",
                        "value": True
                    },
                    # { #not implemented yet
                    #     "id": "autoUpdate",
                    #     "type": "switch",
                    #     "label": "Auto Update",
                    #     "value": True
                    # }
                ]
            },
            {
                "name": "Appearance",
                "icon": "bi bi-palette",
                "settings": [
                    {
                        "id": "theme",
                        "type": "select",
                        "label": "Theme",
                        "value": "dark",
                        "options": ["dark", "light", "amoled", "multimc", "catppuccin-mocha", "catppuccin-macchiato", "catppuccin-frappe", "catppuccin-latte", "tokyo-night", "tokyo-storm"]
                    },
                    {
                        "id": "darkmode",
                        "type": "switch",
                        "label": "Dark Mode",
                        "value": True
                    },
                    {
                        "id": "favicon",
                        "type": "select",
                        "label": "Launcher Icon",
                        "value": "Polymer",
                        "options": ["Polymer", "PolymerWhite", "PolymerBlack", "PolymerCatppuccin", "PolymerBlackBG", "PolymerWhiteBG", "PolymerMonoBlack", "PolymerMonoWhite"]
                    }
                ]
            }
        ]
    )]

Schemes = {
    "settings": [Item(**to_short_config(convert_to_dict(SettingsTemplate()[0])))],
}