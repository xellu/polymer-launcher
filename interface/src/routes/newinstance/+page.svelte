<script lang="ts">
    import Loader from "$lib/components/loader.svelte";

    import { apiBaseUrl } from "$lib/config";
    import { settingsStore } from "$lib/scripts/SettingsManager";

    import { onMount } from "svelte";
    import { slide } from "svelte/transition";

    let loading: boolean = true;
    let versions: {latest: string, versions: {id: string, type: string}[]} = {
        latest: "",
        versions: []
    }

    let icons: string[] = [
        "/Polymer.png",
        "/PolymerMono.png",
        "/PolymerMonoWhite.png",
        "/PolymerMonoBlack.png",
    ]

    let settings: any = {}
    let showSnapshots = false

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
            res.text().then(text => {
                JSON.parse(text).icons.forEach((icon: string) => {
                    icons = [...icons, `${apiBaseUrl}/instances/icons/${icon}`]
                });
            })
        })
    }

    let selection = {
        name: "",
        version: "",
        icon: icons[0]
    }

    onMount(() => {
        loadVersions()
        loadIcons()
    })

</script>

{#if loading}
    <Loader center={true} />
{:else}
<div class="p-5 select-none">
    <h2 class="h3 font-bold">New Instance</h2>

    <div class="flex flex-col gap-3 w-3/5 mt-5" transition:slide>
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
                    <button on:click={() => selection.icon = icon} class="border-2 {selection.icon == icon ? 'border-primary-500' : 'border-white/0'} rounded-lg overflow-hidden p-px">
                        <img src={icon} alt={icon} class="w-8 h-8 rounded-md" draggable="false" />
                    </button>
                {/each}
                <button class="hover:text-primary-500 duration-300">
                    <i class="bi bi-plus-square-dotted text-3xl"></i>
                </button>
            </div>
        </label>

        <button class="btn variant-filled-primary mt-5">Create</button>

    </div>

</div>
{/if}