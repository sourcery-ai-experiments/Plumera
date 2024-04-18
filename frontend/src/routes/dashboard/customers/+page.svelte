<script lang="ts">
	import { CirclePlus, FileImage } from 'lucide-svelte';
	import DotsHorizontal from 'svelte-radix/DotsHorizontal.svelte';
	import { tick } from 'svelte';
	import * as Command from '$lib/components/ui/command/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	const labels = [
		'feature',
		'bug',
		'enhancement',
		'documentation',
		'design',
		'question',
		'maintenance'
	];

	let open = false;
	let selectedLabel = 'feature';

	function closeAndFocusTrigger(triggerId: string) {
		open = false;
		tick().then(() => {
			document.getElementById(triggerId)?.focus();
		});
	}

	import { Checkbox } from '$lib/components/ui/checkbox/index.js';
	import Label from '$lib/components/ui/label/label.svelte';

	let checked = false;
</script>

<section class="px-6 py-6">
	<header class="flex justify-between items-center">
		<div class="flex justify-center items-center gap-12">
			<h5 class="text-black text-lg font-semibold">Invoices</h5>
			<a href="/" class=" flex justify-center gap-1 items-center text-black text-sm">
				<CirclePlus class="w-3 h-3" />
				Create
			</a>
		</div>
		<div class="relative text-gray-600">
			<input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
						 type="search" name="search" placeholder="Search">
			<button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
				<svg class="text-gray-600 h-4 w-4 fill-current" x="0px" y="0px"
						 viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
						 width="512px" height="512px">
            <path
							d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
			</button>
		</div>
	</header>

	<div class="mt-6">
		<table class="table w-full text-black border-separate space-y-6 text-sm">
			<thead>
			<tr>
				<th class="flex items-center gap-2 p-3 text-center">
					<Checkbox id="default-checkbox" bind:checked />
					<Label
						for="default-checkbox"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						Select All
					</Label>
				</th>
				<th class="p-3 text-center">Name</th>
				<th class="p-3 text-center">Price</th>
				<th class="p-3 text-center">Client</th>
				<th class="p-3 text-center">Status</th>
				<th class="p-3 text-center">Date</th>
				<th class="p-3 text-center">Action</th>
			</tr>
			</thead>
			<tbody>
			<tr class="bg-[#e7effc]">
				<td class="flex items-center gap-2 p-3 text-center">
					<Checkbox id="default-checkbox" bind:checked />
					<Label
						for="default-checkbox"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						<FileImage class="w-8 h-8" />
					</Label>
				</td>
				<td class="p-3 text-center">Design</td>
				<td class="p-3 text-center">$100</td>
				<td class="p-3 text-center">John Doe</td>
				<td class="p-3 text-center">
					<span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Paid</span>
				</td>
				<td class="p-3 text-center">12/12/2021</td>
				<td class="p-3 text-center">
					<DropdownMenu.Root bind:open let:ids>
						<DropdownMenu.Trigger asChild let:builder>
							<Button
								builders={[builder]}
								variant="ghost"
								size="sm"
								aria-label="Open menu"
							>
								<DotsHorizontal />
							</Button>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content class="w-[200px]" align="end">
							<DropdownMenu.Group>
								<DropdownMenu.Label>Actions</DropdownMenu.Label>
								<DropdownMenu.Item>Assign to...</DropdownMenu.Item>
								<DropdownMenu.Item>Set due date...</DropdownMenu.Item>
								<DropdownMenu.Separator />
								<DropdownMenu.Sub>
									<DropdownMenu.SubTrigger>Apply label</DropdownMenu.SubTrigger>
									<DropdownMenu.SubContent class="p-0">
										<Command.Root value={selectedLabel}>
											<Command.Input
												autofocus
												placeholder="Filter label..."
												class="h-9"
											/>
											<Command.List>
												<Command.Empty>No label found.</Command.Empty>
												<Command.Group>
													{#each labels as label}
														<Command.Item
															value={label}
															onSelect={(value) => {
																selectedLabel = value;
																closeAndFocusTrigger(ids.trigger);
															}}
														>
															{label}
														</Command.Item>
													{/each}
												</Command.Group>
											</Command.List>
										</Command.Root>
									</DropdownMenu.SubContent>
								</DropdownMenu.Sub>
								<DropdownMenu.Separator />
								<DropdownMenu.Item class="text-red-600">
									Delete
									<DropdownMenu.Shortcut>⌘⌫</DropdownMenu.Shortcut>
								</DropdownMenu.Item>
							</DropdownMenu.Group>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				</td>
			</tr>
			</tbody>
		</table>
	</div>
</section>
