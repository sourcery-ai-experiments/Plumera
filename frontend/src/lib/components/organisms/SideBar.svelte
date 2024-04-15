<script lang="ts">
	import { onMount } from 'svelte';
	import { FilePlus, Files, FileSearch2, Home, Users } from 'lucide-svelte';
	import { writable } from 'svelte/store';

	let hide = writable(true);
	let currentPath = writable('');

	onMount(() => {
		currentPath.set(window.location.pathname);
		window.onpopstate = () => {
			currentPath.set(window.location.pathname);
		};
	});

	function toggle() {
		hide.update(value => !value);
	}
</script>

<section class="c-sidebar">
	<a href="/dashboard" class={$currentPath === '/dashboard' ? 'active' : ''}
	>
		<Home />
		Dashboard
	</a>

	<button on:click={toggle}
					class={$currentPath === '/dashboard/invoices' ? 'active' : ''}
	>
		<Files />
		Invoices
	</button>

	{#if !$hide}
		<div class="c-sidebar__sub-menu c-sidebar__sub-menu--link active">
			<a href="/dashboard/invoices/add"
				 class={$currentPath === '/dashboard/invoices/add' ? 'active' : ''}
			>
				<FilePlus />
				créer une facture
			</a>
			<a href="/dashboard/invoices/summaries"
				 class={$currentPath === '/dashboard/invoices/summaries' ? 'active' : ''}
			>
				<FileSearch2 />
				Liste des factures
			</a>
		</div>
	{/if}

	<a href="/dashboard/customers"
		 class={$currentPath === '/dashboard/customers' ? 'active' : ''}
	>
		<Users />
		Clients
	</a>
</section>
