<script lang="ts">
    import { favicon } from "$lib/config";

    let icon = "/favicon.png";
    favicon.subscribe((value) => {
        icon = value;
    })
</script>

<div class="flex items-center gap-3 select-none">
    <img src="{icon}" alt="logo" class="w-12 h-12" draggable="false" />
    <h1 class="text-3xl font-black uppercase text-primary-500 pr-2">Polymer</h1>
</div>