<script>
    import '../../../styles/_main.scss';
    import {onMount} from 'svelte';
    import {Moon, Sun} from "lucide-svelte";

    let theme;

    onMount(() => {
        theme = 'dark';
        updateBodyClass();
    });

    function toggleTheme() {
        theme = theme === 'light' ? 'dark' : 'light';
        updateBodyClass();
    }

    function updateBodyClass() {
        if (typeof document !== 'undefined') {
            document.body.classList.remove('light-theme', 'dark-theme');
            document.body.classList.add(`${theme}-theme`);
        }
    }
</script>

<button on:click={toggleTheme}>
    {#if theme === 'light'}
        <Moon class="text-black"/>
    {:else}
        <Sun class="text-black"/>
    {/if}
</button>
