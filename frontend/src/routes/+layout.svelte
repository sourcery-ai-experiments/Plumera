<script>
	import '../styles/_main.scss';
	import ThemeSwitcher from '../components/atoms/ThemeSwitcher.svelte';
</script>

<section>
	<div>
		Header
		<ThemeSwitcher />
	</div>

	<main>
		<slot />
	</main>
</section>

<style></style>
