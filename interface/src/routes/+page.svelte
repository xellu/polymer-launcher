<script lang="ts">
    import Placeholder from "$lib/components/placeholder.svelte";
    
    import { apiBaseUrl } from "$lib/config";
    import { goto } from "$app/navigation";

    import { slide, fade } from "svelte/transition";
    import { onMount } from "svelte";

    let instances: any[] = [];

    
    const actions: {name: string, icon: string, onClick: Function}[] = [
        {
            name: "New Instance",
            icon: "bi bi-plus-square",
            onClick: () => {
                goto(`/newinstance`);	
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
</script>

<!-- tabs -->
<div class="fixed h-14 w-full bg-surface-100 dark:bg-surface-600 p-3 flex items-center select-none drop-shadow-sm">
    {#each actions as action}
        <button on:click={() => action.onClick()} class="flex items-center gap-2 btn btn-sm">
            <i class={action.icon}></i>
            <span>{action.name}</span>
        </button>
    {/each}
</div>

<div class="pt-16 p-2 h-full">
    {#if instances.length == 0}
        <Placeholder />
    {:else}
        <div class="flex gap-5 flex-wrap p-3">
            {#each instances as instance}
            <button on:click={() => selectedInstance = instance}>
                <div class="bg-primary-500/20 dark:bg-surface-600 flex flex-col gap-1 rounded-lg overflow-hidden">
                    <img src="{instance.icon_path}" alt="" class="w-24 h-24 m-2 rounded-sm" draggable="false">
                    <h3 class="{selectedInstance == instance ? 'bg-primary-500 text-white dark:text-black' : 'bg-primary-500/10'}
                        text-ellipsis whitespace-nowrap overflow-hidden w-28 p-2 rounded-lg">{instance.name}</h3>
                </div>
            </button>
            {/each}
        </div>
    {/if}
</div>