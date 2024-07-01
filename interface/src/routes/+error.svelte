<script lang="ts">
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    const redirectIn: number = 3

    onMount(() => {
        setTimeout(() => {
            goto("/")
        }, redirectIn * 1000)
    })
</script>

<div class="flex items-center justify-center flex-col h-screen">
    <h1 class="h1 font-bold text-error-500">{$page.status}</h1>
    <p>{$page.error?.message}</p>
</div>