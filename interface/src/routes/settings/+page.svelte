<script lang="ts">
    import Loader from "$lib/components/loader.svelte";

    import { SlideToggle } from "@skeletonlabs/skeleton";
    import { onMount } from "svelte";
    import { apiBaseUrl } from "$lib/config";
    import { settingsManager } from "$lib/scripts/SettingsManager.ts";

    import { getToastStore, getModalStore } from "@skeletonlabs/skeleton";
    const toast = getToastStore();
    const modal = getModalStore();

    let settings: any = {}

    const labelBlacklist: string[] = ["text", "heading", "button", "switch"]

    let currentPage: any = {
        id: null,
        name: "Loading",
        settings: [],
    }

    function loadSettings() {
        fetch(`${apiBaseUrl}/settings/fetch`)
        .then(res => {
            if (!res.ok) {
                return toast.trigger({
                    message: `Failed to fetch settings: ${res.status} ${res.statusText}`,
                    background: "variant-filled-error"
                })
            }

            res.text().then(text => {
                settings = JSON.parse(text)
                
                currentPage = {
                    id: Object.keys(settings)[0],
                    name: settings[Object.keys(settings)[0]][0].name,
                    settings: settings[Object.keys(settings)[0]][0].settings,
                }
            })
        })
        .catch(err => {
            toast.trigger({
                message: `Failed to fetch settings: ${err}`,
                background: "variant-filled-error"
            })
        })
    }

    function pushSettings() {
        fetch(`${apiBaseUrl}/settings/push`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                settings: settings
            })
        })
        .then(res => {
            if (!res.ok) {
                res.text().then(text => {
                    console.log(text)
                })
                return toast.trigger({
                    message: `Failed to push settings: ${res.status} ${res.statusText}`,
                    background: "variant-filled-error"
                })
            } else {
                toast.trigger({
                    message: "Settings applied successfully",
                    background: "variant-filled-success"
                })
                settingsManager.update()
            }
        })
    }

    function resetSettings(confirm?: boolean | "open") {
        if (confirm == true) {
            return loadSettings()
        }

        if (confirm != "open") {
            return
        }

        modal.trigger({
            type: "confirm",
            title: "Discard Changes",
            body: "Are you sure you want to discard all changes?",
            response: (r) => {
                resetSettings(r)
            }
        })
    }

    onMount(() => {
        loadSettings()
    })
</script>

<div class="flex h-screen">
    <!-- tabs -->
    {#if Object.keys(settings).length == 0}
        <div class="flex w-full h-screen items-center justify-center">
            <Loader />
        </div>
    {:else}
    <div class="h-full bg-surface-800 p-3 flex flex-col gap-2 pt-0 drop-shadow-md min-w-48">
        {#each Object.keys(settings) as category}
            <p class="uppercase mt-3 font-bold text-primary-500 text-sm">{category}</p>
            {#each settings[category] as setting}
                <button
                    class="btn w-full flex gap-1 items-center justify-start {currentPage.name == setting.name ? 'variant-filled-primary' : 'variant-filled-surface'}"
                    on:click={() => {
                        currentPage = {
                            id: Object.keys(settings).filter(key => settings[key].includes(setting))[0], // get the category id (key) of the setting
                            name: setting.name,
                            settings: setting.settings,
                        }
                    }}
                >
                    <i class={setting.icon}></i>
                    <span>{setting.name}</span>
                </button>
            {/each}
        {/each}
    </div>

    <!-- settings -->
    <div class="p-3 flex flex-col gap-3">
        <h2 class="h3 font-bold">{currentPage.name}</h2>
        {#each currentPage.settings as setting, i}
        <div>
            <!-- setting label -->
            {#if setting.label && !labelBlacklist.includes(setting.type)} <p class="text-sm mt-5 mb-1">{setting.label}</p> {/if}

            <!-- enum -->
            {#if setting.type == "select"}
                <select bind:value={setting.value}
                class="input p-2 rounded-md">
                    {#each setting.options as option}
                        <option value={option}>{option}</option>
                    {/each}
                </select>

            {:else if setting.type == "switch"} 
                <SlideToggle name={setting.id} bind:checked={setting.value} active="bg-primary-500" rounded="rounded-md" size="sm">
                    <p>{setting.label}</p>
                </SlideToggle>

            <!-- fallback -->
            {:else}
                <div class="card variant-filled-error p-3">
                    <h5 class="h5 font-bold">Unknown Setting Type</h5>
                    {#each Object.keys(setting) as key}
                        <p>{key}: {setting[key]}</p>
                    {/each}
                </div>
            {/if}
        </div>
        {/each}
    </div>
    {/if}
</div>

<div class="fixed bottom-0 right-0 p-3 flex gap-3 items-center">
    <button class="btn variant-outline-error" on:click={() => {
        resetSettings("open")
    }}>Discard</button>
    <button class="btn variant-filled-primary" on:click={() => {
        pushSettings()
    }}>Apply</button>
</div>