<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import * as Command from '$lib/components/ui/command/index.js';
	import Calendar from 'svelte-radix/Calendar.svelte';
	import Face from 'svelte-radix/Face.svelte';
	import Rocket from 'svelte-radix/Rocket.svelte';

	const dispatch = createEventDispatcher();

	let open = false;

	function closeDialog() {
		open = false;
		dispatch('close');
	}

	onMount(() => {
		function handleKeydown(e: KeyboardEvent) {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				open = !open;
			}
		}

		document.addEventListener('keydown', handleKeydown);
		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<p class="text-sm text-muted-foreground">
	Press
	<kbd
		class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"
	>
		<span class="text-xs">⌘</span>K
	</kbd>
</p>
<Command.Dialog bind:open>
	<Command.Input placeholder="Type a command or search..." />
	<Command.List>
		<Command.Empty>No results found.</Command.Empty>
		<Command.Group heading="Suggestions">
			<a href="/dashboard/calendar" on:click={closeDialog}>
				<Command.Item>
					<Calendar class="mr-2 h-4 w-4" />
					<span>Calendar</span>
				</Command.Item>
			</a>
			<a href="/dashboard/invoices/add" on:click={closeDialog}>
				<Command.Item>
					<Face class="mr-2 h-4 w-4" />
					<span>Créer une facture</span>
				</Command.Item>
			</a>
			<a href="/dashboard/invoices/summaries" on:click={closeDialog}>
				<Command.Item>
					<Rocket class="mr-2 h-4 w-4" />
					<span>Liste des factures</span>
				</Command.Item>
			</a>
		</Command.Group>
	</Command.List>
</Command.Dialog>
