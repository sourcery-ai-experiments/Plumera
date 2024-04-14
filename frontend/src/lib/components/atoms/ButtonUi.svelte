<script>
	export let primary = true;
	export let className = '';
	export let size = 'medium';
	export let label = '';
	export let backgroundColor = '';
	export let onClick = null;
	export let type = 'button';

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function handleClick() {
		if (onClick) {
			onClick();
		}
		dispatch('click');
	}
</script>

<button
	type={type}
	class="c-button c-button--{size} c-button--{backgroundColor} {className} {primary ? 'c-button--primary' : 'c-button--secondary'}"
	on:click={handleClick}
>
	<span><slot /></span>
	<span>{label}</span>
</button>
