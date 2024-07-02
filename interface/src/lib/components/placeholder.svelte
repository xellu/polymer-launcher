<script lang="ts">
    import { favicon } from "$lib/config";

    let icon = "/favicon.png";
    favicon.subscribe((value) => {
        icon = value;
    })

    export const center: boolean = true
</script>

<div class="{center ? 'w-full h-full flex items-center justify-center' : ''} select-none">
    <img src="{icon}" alt="" class="w-72 opacity-5 select-none" draggable="false">
</div>