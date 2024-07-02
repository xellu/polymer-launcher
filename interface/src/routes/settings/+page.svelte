<script lang="ts">
    import Loader from "$lib/components/loader.svelte";

    import { SlideToggle } from "@skeletonlabs/skeleton";
    import { onMount } from "svelte";
    import { apiBaseUrl } from "$lib/config";

    import { getToastStore } from "@skeletonlabs/skeleton";
    const toast = getToastStore();

    let settings: any = {}

    const labelBlacklist: string[] = ["text", "heading", "button", "switch"]

    let currentPage: any = {
        name: "Loading",
        settings: [],
    }

    onMount(() => {
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
            <p class="uppercase mt-3 font-bold text-primary-500">{category}</p>
            {#each settings[category] as setting}
                <button
                    class="btn w-full flex gap-1 items-center justify-start {currentPage.name == setting.name ? 'variant-filled-primary' : 'variant-filled-surface'}"
                    on:click={() => {
                        currentPage = {
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
        {#each currentPage.settings as setting}
        <div>
            <!-- setting label -->
            {#if setting.label && !labelBlacklist.includes(setting.type)} <p class="text-sm mt-5 mb-1">{setting.label}</p> {/if}

            <!-- enum -->
            {#if setting.type == "select"}
                <select bind:value={setting.value} class="input p-2 rounded-md">
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