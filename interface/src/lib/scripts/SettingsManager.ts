import { apiBaseUrl } from "$lib/config"
import { writable, type Writable } from "svelte/store"

export let settingsStore: Writable<any> = writable({
    isNotLoaded: true,
})


let eventLoop: any | null = null
function say(text: string) {
    console.log(`%c[Settings] %c${text}`, "color: #0f87ff", "color: #6bb5ff")
}
function sayError(text: string) {
    console.error(`%c[Settings] %c${text}`, "color: #ff0f0f", "color: #ff6b6b")
}

export const settingsManager = {
    init: () => {
        if (eventLoop) {
            sayError("Event loop already running")
            return
        }

        settingsManager.update()
        // eventLoop = setInterval(settingsManager.update, 10000) //pull settings from server every 10 seconds
        // ^ not needed, update is called when page is loaded or when settings are applied
        
        say("Initialized")
    },
    unload: () => {
        if (eventLoop) {
            clearInterval(eventLoop)
            eventLoop = null
            say("Stopped event loop")
        } else {
            sayError("Event loop already stopped")
        }
    },
    update: () => {
        say("Pulling settings from server")
        fetch(`${apiBaseUrl}/settings/values`)
        .then(res => {
            if (!res.ok) {
                sayError("Failed to fetch settings, stopping event loop")
                settingsManager.unload()
                return
            }

            res.text().then(text => {
                settingsStore.set(JSON.parse(text))
            })
        })
        .catch(err => {
            sayError(`Failed to fetch settings: ${err}`)
            sayError("Stopping event loop")
            settingsManager.unload()
        })
    }
}