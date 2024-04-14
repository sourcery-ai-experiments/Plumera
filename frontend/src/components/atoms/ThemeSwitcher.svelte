<script>
	import '../../styles/_main.scss';
	import { onMount } from 'svelte';

	let theme;

	onMount(() => {
		theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
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
	Toggle theme
</button>
