<script lang="ts">
    import Placeholder from "$lib/components/placeholder.svelte";

    import { apiBaseUrl } from "$lib/config";
    import { goto } from "$app/navigation";

    import { onMount } from "svelte";
    import { getToastStore } from "@skeletonlabs/skeleton";
    const toast = getToastStore();

    let instances: any[] = [];

    
    const actions: {name: string, icon: string, onClick: Function}[] = [
        {
            name: "New Instance",
            icon: "bi bi-plus-square",
            onClick: () => {
                goto(`/instance/new`);	
            }
        },
        {
            name: "New Folder",
            icon: "bi bi-folder-plus",
            onClick: () => {
                alert("new folder")
            }
        }
    ]

    let newUpdateAvailable: boolean = false;
    let selectedInstance: any = null;

    onMount(() => {
        const query = new URLSearchParams(window.location.search);
        if (query.has("error")) {
            toast.trigger({
                message: query.get("error") as string,
                background: "variant-filled-error"
            })
        }

        fetch(`${apiBaseUrl}/instances`)
        .then(res => {
            res.text().then(text => {
                let data = JSON.parse(text);
                
                instances = data.instances;
                
                selectedInstance = instances[0];
                if (data.release.current != data.release.latest) {
                    newUpdateAvailable = true;
                }
            })
        })
    
    })

    function openFolder() {
        fetch(`${apiBaseUrl}/instances/${selectedInstance.DATAFORGE_UUID}/openfolder`, {method: "POST"})
    }
</script>

<!-- tabs -->
<div class="fixed h-14 w-full bg-surface-100 dark:bg-surface-600 p-3 flex items-center select-none drop-shadow-sm z-10">
    {#each actions as action}
        <button on:click={() => action.onClick()} class="flex items-center gap-2 btn btn-sm">
            <i class={action.icon}></i>
            <span>{action.name}</span>
        </button>
    {/each}
</div>

<div class="h-full flex items-start justify-start {instances.length > 0 ? 'overflow-y-scroll' : ''}">
    {#if instances.length == 0}
        <Placeholder />
    {:else}
        <div class="flex gap-5 flex-wrap p-5 flex-grow pt-[4.5rem]">
            {#each instances as instance}
            <button
                on:click={() => {
                    selectedInstance = instance;
                }}
                on:dblclick={() => {
                    alert("play instance")
                }}
            >
                <div class="flex flex-col card gap-1 overflow-hidden drop-shadow-md">
                    <img src="{instance.icon_path}" alt="{instance.name}" class="w-24 h-24 m-2 rounded-sm" draggable="false">
                    <h3 class="card {selectedInstance == instance ? 'variant-filled-primary' : 'variant-filled-surface'}
                        text-ellipsis whitespace-nowrap overflow-hidden w-28 p-2 duration-150">{instance.name}</h3>
                </div>
            </button>
            {/each}
        </div>
        <div class="min-w-44"></div>

        <div class="pt-[4.5rem] p-2 bg-surface-50 dark:bg-surface-700 min-w-44 h-full drop-shadow-md flex flex-col gap-2 fixed right-0">
            <img src="{selectedInstance.icon_path}" alt="{selectedInstance.name}" class="w-32 self-center">
            <h3 class="text-center text-lg max-w-32 whitespace-nowrap text-ellipsis overflow-hidden self-center">{selectedInstance.name}</h3>

            <div class="flex flex-col gap-1 w-full">
                
                <button class="btn btn-sm variant-soft-primary flex items-center justify-start px-3 gap-1">
                    <i class="bi bi-play-circle"></i>
                    <p>Play</p>
                </button>
                
                <button class="btn btn-sm variant-soft-primary flex items-center justify-start px-3 gap-1"
                    on:click={() => { goto(`/instance/edit/${selectedInstance.DATAFORGE_UUID}`) }}>
                    
                    <i class="bi bi-pencil"></i>
                    <p>Edit</p>
                </button>
                
                <button class="btn btn-sm variant-soft-primary flex items-center justify-start px-3 gap-1"
                    on:click={() => { openFolder() }}>

                    <i class="bi bi-folder"></i>
                    <p>Open Folder</p>
                </button>
                
                
            </div>
        </div>
    {/if}
</div>