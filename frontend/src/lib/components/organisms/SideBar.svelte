<script lang="ts">
	import { onMount } from 'svelte';
	import { CalendarDays, FilePlus, Files, FileSearch2, Home, Users } from 'lucide-svelte';
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

	function updateActive(path) {
		if ($hide || path !== $currentPath) {
			hide.set(true);
		}
		currentPath.set(path);
	}
</script>

<section class="c-sidebar">
	<div class="logo">
		<img
			src="/logo/logo-white.png"
			alt="logo skipperndt"
		/>
	</div>

	<a href="/dashboard" class:active={$currentPath === '/dashboard'} on:click={() => updateActive('/dashboard')}>
		<Home />
		Dashboard
	</a>

	<button on:click={toggle}
					class:active={$currentPath === '/dashboard/invoices/add' || $currentPath === '/dashboard/invoices/summaries'}>
		<Files />
		Invoices
	</button>

	{#if !$hide}
		<div class="c-sidebar__sub-menu c-sidebar__sub-menu--link active" role="menu">
			<a href="/dashboard/invoices/add" class:active={$currentPath === '/dashboard/invoices/add'}
				 on:click={() => updateActive('/dashboard/invoices/add')}>
				<FilePlus />
				Créer une facture
			</a>
			<a href="/dashboard/invoices/summaries" class:active={$currentPath === '/dashboard/invoices/summaries'}
				 on:click={() => updateActive('/dashboard/invoices/summaries')}>
				<FileSearch2 />
				Liste des factures
			</a>
		</div>
	{/if}

	<a href="/dashboard/calendar" class:active={$currentPath === '/dashboard/calendar'}
		 on:click={() => updateActive('/dashboard/calendar')}>
		<CalendarDays />
		Calendar
	</a>

	<a href="/dashboard/customers" class:active={$currentPath === '/dashboard/customers'}
		 on:click={() => updateActive('/dashboard/customers')}>
		<Users />
		Clients
	</a>
</section>
