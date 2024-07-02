<script lang="ts">
    import Placeholder from "$lib/components/placeholder.svelte";
    
    import { apiBaseUrl } from "$lib/config";
    import { goto } from "$app/navigation";

    import { slide, fade } from "svelte/transition";

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

<div class="pt-14 p-3 h-full">
    {#if instances.length == 0}
        <Placeholder />
    {:else}
        <p>You have instances created</p>
    {/if}
</div>