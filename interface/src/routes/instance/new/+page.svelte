<script lang="ts">
    import { goto } from "$app/navigation";
    import Loader from "$lib/components/loader.svelte";

    import { apiBaseUrl } from "$lib/config";
    import { settingsStore } from "$lib/scripts/SettingsManager";
    import { getToastStore } from "@skeletonlabs/skeleton";

    import { onMount } from "svelte";
    import { slide } from "svelte/transition";

    const toast = getToastStore();

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
    let download: {open: boolean, status: {file: string | null, progress: number}} = {
        open: false,
        status: {
            file: null,
            progress: 0
        }
    }

    settingsStore.subscribe((value) => {
        settings = value;

        if (settings.showSnapshots != undefined) {
            showSnapshots = settings.showSnapshots
        }
    })

    function loadVersions() {
        fetch(`${apiBaseUrl}/instances/versions`)
        .then(res => {
            loading = false;
            res.text().then(text=> {
                versions = JSON.parse(text)

                selection.version = versions.latest
            })
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

    function createInstance() {
        const id = Math.random().toString(36).substring(7);

        download.open = true;
        let interval = setInterval(() => {
            fetch(`${apiBaseUrl}/instances/create/${id}/status`).then(res => {
                res.text().then(text => {
                    let data = JSON.parse(text).status;
                    download.status.progress = data.progress;
                    
                    if (data.file) { download.status.file = data.file }
                })
            })
        }, 300)

        fetch(`${apiBaseUrl}/instances/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: selection.name || selection.version,
                version_id: selection.version,
                icon_path: selection.icon,
                identifier: id
            })
        }).then(res => {
            setTimeout(() => {
                download.open = false
                download.status = {
                    progress: 0,
                    file: null
                }

                clearInterval(interval)

                res.text().then(text => {
                    let data = JSON.parse(text)
                    if (res.ok) {
                        goto(`/instance/edit/${data.instance}`)
                    } else {
                        toast.trigger({
                            message: data.error,
                            background: "variant-filled-error"
                        })
                    }
                })
            }, 500)
        })
    }

    let selection = {
        name: "",
        version: "",
        icon: icons[0]
    }

    let iconUpload: {open: boolean, file: any} = {
        open: false,
        file: null
    }

    onMount(() => {
        loadVersions()
        loadIcons()
    })

</script>

{#if loading}
    <Loader center={true} />
{:else if download.open}
    <div class="w-full h-full flex flex-col gap-10 items-center justify-center">
        <Loader center={false} />
        <div class="flex flex-col gap-1">
            <div class="flex items-center justify-between">  
                <p class="text-xs text-primary-400">{download.status.file == null ? "Waiting" : `Downloading ${download.status.file}`}</p>
                <p class="text-xs text-primary-400">{Math.floor(download.status.progress).toString() == "NaN" ? 0 : Math.floor(download.status.progress)}%</p>
            </div>
            <div class="w-64 h-2 rounded-md overflow-hidden bg-surface-500">
                <div class="h-full bg-primary-500 duration-300 rounded-md" style="width: {Math.floor(download.status.progress)}%"></div>
            </div>
        </div>
    </div>
{:else}
<div class="p-5 select-none">
    <h2 class="h3 font-bold">New Instance</h2>

    <div class="flex flex-col gap-3 w-3/5 mt-5" in:slide>
        <!-- name -->
        <label class="label">
            <span>Instance Name</span>
            <input type="text" class="input" placeholder="{selection.version}" bind:value={selection.name}>
        </label>

        <!-- mc version -->
        <label class="label">
            <span>Game Version</span>
            <div class="flex items-center justify-center gap-3">
                <select bind:value={selection.version} class="input">
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
            <div class="flex gap-1 flex-wrap p-3 bg-primary-500/10 dark:bg-surface-700 rounded-xl select-none">
                {#each icons as icon}
                    <button on:click={() => selection.icon = icon} class="border-2 {selection.icon == icon ? 'border-surface-900 dark:border-surface-100' : 'border-white/0'} duration-300 rounded-sm overflow-hidden p-[2px]">
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

        <button class="btn variant-filled-primary mt-5" on:click={() => createInstance()}> Create </button>

    </div>

</div>
{/if}