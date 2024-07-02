<script lang="ts">
    import { favicon } from "$lib/config";

    import { slide, fade } from "svelte/transition";

    let icon = "/favicon.png";
    favicon.subscribe((value) => {
        icon = value;
    })

    let popUps: {instance:boolean, folder:boolean} = {
        instance: false,
        folder: false
    }

    let instances: any[] = [];

    
    const actions: {name: string, icon: string, onClick: Function}[] = [
        {
            name: "New Instance",
            icon: "bi bi-plus-square",
            onClick: () => {
                popUps.instance = true
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
<div class="fixed h-14 w-full bg-surface-600 p-3 flex items-center select-none">
    {#each actions as action}
        <button on:click={() => action.onClick()} class="flex items-center gap-2 btn btn-sm">
            <i class={action.icon}></i>
            <span>{action.name}</span>
        </button>
    {/each}
</div>

<div class="pt-14 p-3 h-full {instances.length == 0 ? 'flex items-center justify-center flex-col gap-5' : ''}">
    {#if instances.length == 0}
        <img src="{icon}" alt="" class="w-72 opacity-5 select-none" draggable="false">
    {:else}
        <p>You have instances created</p>
    {/if}
</div>

{#if popUps.instance}
<div class="z-30 top-0 left-0 fixed w-screen h-screen bg-black/30 flex items-center justify-center" transition:fade>
    <div class="max-w-xl w-full p-5 card variant-filled-surface" transition:slide>
        <h5 class="h5 text-primary-500 font-bold">New Instance</h5>

        <input type="text">
    </div>
</div>
{/if}