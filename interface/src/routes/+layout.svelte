<script lang="ts">
    import "../app.pcss";

    import Logo from "$lib/components/logo.svelte"
    import { page } from "$app/stores"
    import { initializeStores, Toast, Modal } from '@skeletonlabs/skeleton';

    import { settingsManager, settingsStore } from "$lib/scripts/SettingsManager.ts";
    import { onMount, onDestroy } from "svelte";

    import { favicon } from "$lib/config";

    initializeStores();

    let currentRoute: string | any = "" //had to add any because of typescript 😍😍
    page.subscribe((value) => {
        currentRoute = value.route.id;
    })

    let navItems: {name: string, route: string, icon:string}[] = [
        { name: "Instances", route: "/", icon: "bi bi-boxes" },
        { name: "Settings", route: "/settings", icon: "bi bi-gear"}
    ]

    onMount(() => {
        settingsManager.init();

        document.getElementsByTagName("body")[0].addEventListener("keypress", (e) => {
            if (e.code == "KeyN" && e.ctrlKey && currentRoute == "/") {
                window.location.href = "/new-instance";
            }
        })
    })

    onDestroy(() => {
        settingsManager.unload();
    })

    let settings: any = {}
    settingsStore.subscribe((value) => {
        settings = value;
        processSettings();
    })

    function processSettings() {
        if (settings.theme) {
            document.getElementsByTagName("body")[0].setAttribute("data-theme", settings.theme);
        }
        if (settings.darkmode != undefined) {
            document.getElementsByTagName("html")[0].className = settings.darkmode ? "dark" : "";
        }
        if (settings.favicon) {
            favicon.set(settings.favicon + ".png");
        }
    }
</script>

<title>Polymer</title>

<div class="flex h-screen select-none">

    <!-- sidebar -->
    <div class="bg-surface-50 dark:bg-surface-700 flex flex-col gap-2 p-3 h-full select-none drop-shadow-md z-20 min-w-64">
        <Logo />

        <!-- padding -->
        <div class="h-3"></div>

        {#each navItems as item}
            <a href="{item.route}" draggable="false">
                <button class="btn {currentRoute == item.route ? 'variant-filled-primary' : 'variant-soft-primary'} w-full flex gap-3 items-center justify-start">
                    <i class="{item.icon}"></i>
                    <span>{item.name}</span>
                </button>
            </a>
        {/each}
    </div>

    <div class="flex-grow">
        <slot />
    </div>

</div>

<Toast />
<Modal />