<script lang="ts">
    export let center: boolean = false;
</script>

<style>
    .animate-loader {
        animation: loading 2.5s ease infinite;
    }

    @keyframes loading {
        0% {
            scale: 1;
            filter: blur(0px)
        }
        7% {
            scale: 1.4;
            filter: blur(3px)
        }        
        15% {
            scale: 1;
            filter: blur(0px)
        }
        22% {
            scale: 1.4;
            filter: blur(3px)
        }
        30% {
            scale: 1;
            filter: blur(0px)
        }
    }
</style>

<div class="{center ? 'w-full h-screen flex items-center justify-center' : ''}">
    <img src="/favicon.png" alt="" class="w-32 h-32 animate-loader">
</div>