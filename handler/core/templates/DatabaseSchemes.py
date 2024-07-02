from ..services.database.jsondb.engine import item as Item

def SettingsTemplate():
    return [Item(
        launcher = [
            {
                "name": "Appearance",
                "icon": "bi bi-palette",
                "settings": [
                    {
                        "id": "theme",
                        "type": "select",
                        "label": "Theme",
                        "value": "default",
                        "options": ["default", "catppuccin", "amoled"]
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