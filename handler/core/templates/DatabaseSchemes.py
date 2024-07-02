from ..services.database.jsondb.engine import item as Item

def SettingsTemplate():
    return [Item(
        application = [
            {
                "name": "Appearance",
                "icon": "bi bi-palette",
                "settings": [
                    {
                        "id": "theme",
                        "type": "select",
                        "label": "Theme",
                        "value": "default",
                        "options": ["default", "amoled", "multimc", "catppuccin-mocha", "catppuccin-macchiato", "catppuccin-frappe", "catppuccin-latte", "tokyo-night", "tokyo-storm"]
                    },
                    {
                        "id": "darkmode",
                        "type": "switch",
                        "label": "Dark Mode",
                        "value": True
                    }
                ]
            }
        ]
    )]

Schemes = {
    "settings": SettingsTemplate(),
}