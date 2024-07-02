<script lang="ts">
    import "../app.pcss";

    import Logo from "$lib/components/logo.svelte"
    import { page } from "$app/stores"
    import { initializeStores, Toast } from '@skeletonlabs/skeleton';

    initializeStores();

    let currentRoute: string | any = "" //had to add any because of typescript 😍😍
    page.subscribe((value) => {
        currentRoute = value.route.id;
    })

    let navItems: {name: string, route: string, icon:string}[] = [
        { name: "Instances", route: "/", icon: "bi bi-boxes" },
        { name: "Settings", route: "/settings", icon: "bi bi-gear"}
    ]
</script>

<div class="flex h-screen">

    <!-- sidebar -->
    <div class="bg-surface-700 flex flex-col gap-2 p-3 h-full select-none drop-shadow-md z-20">
        <Logo />

        <!-- padding -->
        <div class="h-3"></div>

        {#each navItems as item}
            <a href="{item.route}" draggable="false">
                <button class="btn {currentRoute == item.route ? 'variant-filled-primary' : 'variant-filled-surface'} w-full flex gap-3 items-center justify-start">
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