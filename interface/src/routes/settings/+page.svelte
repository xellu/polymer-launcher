<script lang="ts">
    import { SlideToggle } from "@skeletonlabs/skeleton";

    let settings: any = {
        launcher: [
            {
                name: "Appearance",
                icon: "bi bi-palette",
                settings: [
                    {
                        id: "theme",
                        type: "select",
                        label: "Theme",
                        value: "default",
                        options: ["default", "catppuccin"]
                    },
                    {
                        id: "darkmode",
                        type: "switch",
                        label: "Dark Mode",
                        value: true
                    }
                ]
            }
        ]
    }

    const labelBlacklist: string[] = ["text", "heading", "button", "switch"]

    let currentPage: any = {
        name: settings.launcher[0].name,
        settings: settings.launcher[0].settings,
    }
</script>

<div class="flex h-screen">
    <!-- tabs -->
    <div class="h-full bg-surface-800 p-3 flex flex-col gap-2 pt-0 drop-shadow-md">
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
</div>