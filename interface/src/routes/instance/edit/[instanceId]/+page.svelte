<script lang="ts">
    import Loader from "$lib/components/loader.svelte";

    import { page } from "$app/stores";
    import { goto } from "$app/navigation";

    import { onMount } from "svelte";
    import { slide } from "svelte/transition";
    import { getToastStore } from "@skeletonlabs/skeleton";

    import { apiBaseUrl } from "$lib/config";
    import { settingsStore } from "$lib/scripts/SettingsManager";

    const toast = getToastStore();

    let instanceId: string | null = "";
    let instance: any = null;

    let loading: boolean = true;
    let versions: {latest: string, versions: {id: string, type: string}[]} = {
        latest: "",
        versions: []
    }

    let icons: string[] = [
        "/Polymer.png",
        "/PolymerWhite.png",
        "/PolymerBlack.png",
        "/PolymerCatppuccin.png"
    ]

    let settings: any = {}
    let showSnapshots = false

    let iconUpload: {open: boolean, file: any} = {
        open: false,
        file: null
    }

    page.subscribe((value) => {
        instanceId = value.params.instanceId;
    })

    settingsStore.subscribe((value) => {
        settings = value;

        if (settings.showSnapshots != undefined) {
            showSnapshots = settings.showSnapshots
        }
    })

    function loadInstance() {
        fetch(`${apiBaseUrl}/instances/${instanceId}`)
        .then(res => { res.text().then(text => {
            if (!res.ok) {
                goto(`/?error=Unable to load instance: ${text}`)
                return
            }

            instance = JSON.parse(text)  
            loading = false
        })})
        .catch(err => {
            goto(`/?error=${err}`)
        })
    }

    function loadIcons() {
        fetch(`${apiBaseUrl}/instances/icons`)
        .then(res => {
            let newIcons: string[] = ["/Polymer.png", "/PolymerWhite.png", "/PolymerBlack.png", "/PolymerCatppuccin.png"]
            res.text().then(text => {
                JSON.parse(text).icons.forEach((icon: string) => {
                    newIcons.push(`${apiBaseUrl}/instances/icons/${icon}`)
                });

                icons = newIcons;
            })
        })
    }

    function loadVersions() {
        fetch(`${apiBaseUrl}/instances/versions`)
        .then(res => {
            loading = false;
            res.text().then(text=> {
                versions = JSON.parse(text)
            })
        })
    }

    let tab: string = "general";

    function save() {
        fetch(`${apiBaseUrl}/instances/${instanceId}/edit`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                instance: instance
            })
        }).then(res => {
            if (!res.ok) {
                res.text().then(text => {
                    toast.trigger({
                        message: `Couldn't save changes: ${JSON.parse(text).error}`,
                        background: "variant-filled-error"
                    })
                })
            }
        })
    }
    
    onMount(() => {
        loadInstance()
        loadVersions()
        loadIcons()
    })

</script>


{#if loading || instance == null}
    <Loader center={true} />
{:else}
<div class="flex h-full">
    <div class="min-w-48 h-full bg-surface-100 dark:bg-surface-800 p-3 flex flex-col drop-shadow-md">

    </div>
    <div class="p-5 select-none">
        <h2 class="h3 font-bold capitalize">{tab}</h2>

        <div class="flex flex-col gap-3 mt-5" transition:slide>
            <!-- name -->
            <label class="label">
                <span>Instance Name</span>
                <input type="text" class="input" placeholder="{instance.version_id}" bind:value={instance.name} on:change={() => save()}>
            </label>

            <!-- mc version -->
            <label class="label">
                <span>Game Version</span>
                <div class="flex items-center justify-center gap-3">
                    <select bind:value={instance.version_id} class="input" on:change={() => save()}>
                        {#each versions.versions as version}
                            {#if version.type == "release" || showSnapshots}
                                <option value={version.id}>{version.id}</option>
                            {/if}
                        {/each}
                    </select>
                    <label class="flex items-center space-x-2">
                        <input class="checkbox" type="checkbox" bind:checked={showSnapshots} />
                        <p>Snapshots</p>
                    </label>
                </div>
            </label>

            <!-- icon -->
            <label class="label">
                <span>Icon</span>
                <div class="flex gap-1 flex-wrap p-3 card select-none">
                    {#each icons as icon}
                        <button on:click={() => { instance.icon_path = icon; save() }} class="border-2 {instance.icon_path == icon ? 'border-surface-900 dark:border-surface-100' : 'border-white/0'} duration-300 rounded-sm overflow-hidden p-[2px]">
                            <img src={icon} alt={icon} class="w-8 h-8" draggable="false" />
                        </button>
                    {/each}
                    <button class="{iconUpload.open ? 'text-primary-500' : 'hover:text-primary-500'} duration-300" on:click={() => {
                        iconUpload.open = !iconUpload.open
                    }}>
                        <i class="bi bi-plus-square-dotted text-3xl"></i>
                    </button>
                </div>

                {#if iconUpload.open}
                <div class="flex gap-1 items-center mt-5" transition:slide={{duration: 250}}>
                    <input type="file" accept="image/*" class="input" bind:files={iconUpload.file} on:change={() => {
                        //upload file
                        let formData = new FormData();
                        formData.append("icon", iconUpload.file[0]);

                        fetch(`${apiBaseUrl}/instances/icons/upload`, {
                            method: "POST",
                            body: formData
                        }).then(res => {
                            if (res.ok) {
                                loadIcons()
                            }
                        })
                    }}>
                </div>
                {/if}
            </label>

        </div>

    </div>
</div>
{/if}