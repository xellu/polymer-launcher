from ..services.database.jsondb.engine import item as Item

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
                    }
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
                        "label": "Polymer Icon",
                        "value": "Polymer",
                        "options": ["Polymer", "PolymerWhite", "PolymerBlack", "PolymerCatppuccin", "PolymerBlackBG", "PolymerWhiteBG", "PolymerMonoBlack", "PolymerMonoWhite"]
                    }
                ]
            }
        ]
    )]

Schemes = {
    "settings": SettingsTemplate(),
}