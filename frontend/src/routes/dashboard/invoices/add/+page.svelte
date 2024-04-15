<script lang="ts">
	import {
		CircleCheck,
		CircleX,
		Flag,
		ImagePlus,
		Info,
		PencilLine,
		Send,
		SquareMenu,
		Trash2
	} from 'lucide-svelte';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Image, Plus } from 'svelte-radix';
	import ButtonUi from '$lib/components/atoms/ButtonUi.svelte';
	import Preview from '$lib/components/organisms/Preview.svelte';

	let lineItems = [];
	let isEditable = [];
	let isEditableSubtotal: boolean = false;
	let editableNote: boolean = false;
	let editableTerms: boolean = false;

	let completed: boolean = false;

	const makeEditable = (index) => {
		isEditable[index] = !isEditable[index];
	};

	const saveInvoice = (index) => {
		console.log('saveInvoice function called', index);
		lineItems = lineItems.map((lineItem, i) => {
			if (i === index) {
				return {
					...lineItem,
					item: lineItem.item,
					rate: lineItem.rate,
					qty: lineItem.qty,
					lineTotal: lineItem.rate * lineItem.qty
				};
			}
			return lineItem;
		});
	};

	const makeEditableSubtotal = () => {
		isEditableSubtotal = !isEditableSubtotal;
	};

	const makeEditableNote = () => {
		editableNote = !editableNote;
	};

	const makeEditableTerms = () => {
		editableTerms = !editableTerms;
	};


	const addLineItem = () => {
		console.log('addLineItem function called');
		lineItems = [...lineItems, {
			item: '',
			rate: 0,
			qty: 0,
			lineTotal: 0
		}];
		console.log('lineItems after adding new item:', lineItems);
	};

	const removeLineItem = (index) => {
		lineItems = lineItems.filter((_, i) => i !== index);
	};
</script>

<section class="px-6 py-6">
	<div class="flex gap-12 text-black">
		<div class="w-3/4">
			<header class="flex justify-between items-center gap-12">
				<div class="flex justify-center items-center">
					<h3 class="text-black text-lg font-semibold">Create invoice</h3>
				</div>
				<div class="text-black">
					<a href="/" class="flex justify-center items-center gap-2">
						<SquareMenu />
						Inovoice List
					</a>
				</div>
			</header>

			<div class="bg-[#f2f5fd] p-6 mt-6 rounded-xl overflow-auto h-[80vh]">
				<div class="flex flex-col items-center">
					<div class="flex justify-between items-center w-full mb-6">
						<p class="flex justify-center items-center gap-2">
							<Image class="text-blue-700" />
							Add Logo
						</p>
						<Info />
					</div>

					<div class="border border-dashed border-gray-500 relative bg-[#e7effc] rounded-xl my-6 w-full">
						<input type="file" multiple class="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50">
						<div class="text-center p-10 absolute top-0 right-0 left-0 m-auto">
							<ImagePlus class="text-blue-700 w-20 h-20 m-auto mb-2" />
							<h4>
								Drop your image here or <span class="text-blue-700">brower</span>
							</h4>
						</div>
					</div>

					<div class="bg-[#e7effc] rounded-xl w-full">
						<div class="flex justify-between items-center p-6">
							<p class="flex justify-center items-center gap-2">
								<Flag class="text-blue-700" />
								Company Details
							</p>
							{#if completed}
								<CircleCheck class="text-green-500" />
							{:else}
								<CircleX class="text-red-500" />
							{/if}
						</div>
						<div class="p-6">
							<div class="grid w-full items-center gap-1.5 my-6">
								<Label for="compagny" class="mb-2">
									Compagny
									<span class="text-red-500">*</span>
								</Label>
								<Input
									class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
									type="text" id="compagny" placeholder="Eva" />
							</div>

							<div class="grid grid-cols-2 gap-6">
								<div class="grid w-full max-w-sm items-center gap-1.5">
									<Label for="address" class="mb-2">Address</Label>
									<Input
										class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
										type="text" id="address" placeholder="626 W Pender St #500, Vancouver, BC V6B 1V9, Canada" />
								</div>

								<div class="grid w-full max-w-sm items-center gap-1.5">
									<Label for="address2" class="mb-2">
										Address 2
									</Label>
									<Input
										class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
										type="text" id="address2" placeholder="626 W Pender St #500, Vancouver, BC V6B 1V9, Canada" />
								</div>

								<div class="grid w-full max-w-sm items-center gap-1.5">
									<Label for="city" class="mb-2">City <span class="text-red-500">*</span></Label>
									<Input
										class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
										type="text" id="city" placeholder="Vancouver" />
								</div>

								<div class="grid w-full max-w-sm items-center gap-1.5">
									<Label for="postalCode" class="mb-2">Postal Code <span class="text-red-500">*</span></Label>
									<Input
										class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
										type="text" id="postalCode" placeholder="V6B 1V9" />
								</div>

								<div class="grid w-full max-w-sm items-center gap-1.5">
									<Label for="country" class="mb-2">Country <span class="text-red-500">*</span></Label>
									<Input
										class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
										type="text" id="country" placeholder="Canada" />
								</div>

								<div class="grid w-full max-w-sm items-center gap-1.5">
									<Label for="phone" class="mb-2">Phone <span class="text-red-500">*</span></Label>
									<Input
										class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
										type="tel" id="phone" placeholder="+1 604-682-2344" />
								</div>
							</div>
						</div>
					</div>

					<div class="rounded-xl my-6 w-full">
						<table class="table w-full text-gray-400 border-separate space-y-6 text-sm">
							<thead class="border-b-2 border-gray-300 mb-4">
							<tr>
								<th class="flex items-center gap-2 p-3 text-center">
									Item
								</th>
								<th class="p-3 text-center">Rate</th>
								<th class="p-3 text-center">Qty</th>
								<th class="p-3 text-center">Line Total</th>
							</tr>
							</thead>
							<tbody>
							{#each lineItems as lineItem, index (index)}
								<tr class="bg-[#e7effc] rounded-xl">
									<td class="flex items-center gap-2 p-3 text-center">
										{#if !isEditable[index]}
											<button class="flex items-center gap-2 w-full" on:click={() => makeEditable(index)}>
												Entre an item invoice
												<PencilLine class="w-4 h-4 hover:text-blue-700" id="item" />
											</button>
										{:else}
											<Input
												class="mt-1 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
												type="text" id="item" placeholder="Design"
												disabled={!isEditable[index]}
												bind:value={lineItem.item}
											/>
										{/if}
									</td>
									<td class="p-3 text-center">
										{#if !isEditable[index]}
											<button class="flex justify-center items-center gap-2 w-full"
															on:click={() => makeEditable(index)}>
												€{lineItem.rate}
												<PencilLine class="w-4 h-4 hover:text-blue-700" id="item" />
											</button>
										{:else}
											<Input
												class="mt-1 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
												type="number" id="rate" placeholder="100"
												disabled={!isEditable[index]}
												bind:value={lineItem.rate}
											/>
										{/if}
									</td>
									<td class="p-3 text-center">
										{#if !isEditable[index]}
											<button class="flex justify-center items-center gap-2 w-full"
															on:click={() => makeEditable(index)}>
												{lineItem.qty}
												<PencilLine class="w-4 h-4 hover:text-blue-700" id="item" />
											</button>
										{:else}
											<Input
												class="mt-1 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
												type="number" id="qty" placeholder="1"
												disabled={!isEditable[index]}
												bind:value={lineItem.qty}
											/>
										{/if}
									</td>
									<td class="p-3 text-center">
										<div class="flex justify-center items-center">
											{#if !isEditable[index]}
												<button class="flex justify-center items-center gap-2 w-full"
																on:click={() => makeEditable(index)}>
													€{lineItem.lineTotal}
													<PencilLine class="w-4 h-4 hover:text-blue-700" id="item" />
												</button>
											{:else}
												<Input
													class="mt-1 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
													type="number" id="lineTotal" placeholder="100"
													disabled={!isEditable[index]}
													bind:value={lineItem.lineTotal}
												/>
											{/if}

											{#if !isEditable[index]}
												<button class="flex justify-center items-center gap-2 w-full"
																on:click={() => removeLineItem(index)}>
													<Trash2 class="w-4 h-4 hover:text-blue-700" />
												</button>
											{:else}
												<button class="flex justify-center items-center gap-2 w-full"
																on:click={() => saveInvoice(index)}>
													<Send class="w-4 h-4 hover:text-blue-700" />
												</button>
											{/if}
										</div>
									</td>
								</tr>
							{/each}
							</tbody>
						</table>
						<div class="flex justify-center items-center my-6 gap-2 text-sm">
							<button class="bg-blue-600 py-1 px-2 text-white">
								<Plus class="w-4 h-4" />
							</button>
							<button class="text-blue-700 text-sm" on:click={addLineItem}>Add lime item</button>
						</div>
					</div>

					<div class="flex flex-col w-full mb-6">
						<div class="flex justify-start items-center w-full gap-3 mb-2">
							<p class="text-sm">
								Subtotal
							</p>
							<hr class="w-full text-blue-700" />
						</div>
						<div>
							<table class="table w-full text-gray-400 border-separate space-y-6 text-sm">
								<tbody>
								<tr class="bg-[#e7effc] rounded-xl">
									<td class="flex items-center gap-2 p-3 text-center">
										{#if !isEditableSubtotal}
											<button class="flex items-center gap-2 w-full"
															on:click={makeEditableSubtotal}>
												Discount
												<PencilLine class="w-4 h-4 hover:text-blue-700" id="item" />
											</button>
										{:else}
											<Input
												class="mt-1 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
												type="text" id="item" placeholder="Design"
											/>
										{/if}
									</td>
									<td class="p-3 text-center">
										{#if !isEditableSubtotal}
											<button class="flex justify-center items-center gap-2 w-full"
															on:click={makeEditableSubtotal}
											>
												€100
												<PencilLine class="w-4 h-4 hover:text-blue-700" id="item" />
											</button>
										{:else}
											<Input
												class="mt-1 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
												type="number" id="rate" placeholder="100"
											/>
										{/if}
									</td>
									<td class="p-3 text-center">
										{#if !isEditableSubtotal}
											<button class="flex justify-center items-center gap-2 w-full"
															on:click={makeEditableSubtotal}
											>
												€100
												<PencilLine class="w-4 h-4 hover:text-blue-700" id="item" />
											</button>
										{:else}
											<Input
												class="mt-1 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
												type="number" id="qty" placeholder="1"
											/>
										{/if}
									</td>
								</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div class="flex flex-col w-full mb-6">
						<div class="flex justify-start items-center w-full gap-3 mb-2">
							<p class="text-sm">
								Total
							</p>
							<hr class="w-full text-blue-700" />
						</div>
						<div>
							<table class="table w-full text-gray-400 border-separate space-y-6 text-sm">
								<tbody>
								<tr class="bg-[#e7effc] rounded-xl">
									<td class="flex items-center gap-2 p-3 text-center">
										{#if !isEditableSubtotal}
											<button class="flex items-center gap-2 w-full"
															on:click={makeEditableSubtotal}>
												Discount
												<PencilLine class="w-4 h-4 hover:text-blue-700" id="item" />
											</button>
										{:else}
											<Input
												class="mt-1 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
												type="text" id="item" placeholder="Design"
											/>
										{/if}
									</td>
									<td class="p-3 text-center">
										{#if !isEditableSubtotal}
											<button class="flex justify-center items-center gap-2 w-full"
															on:click={makeEditableSubtotal}
											>
												€100
												<PencilLine class="w-4 h-4 hover:text-blue-700" id="item" />
											</button>
										{:else}
											<Input
												class="mt-1 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
												type="number" id="rate" placeholder="100"
											/>
										{/if}
									</td>
									<td class="p-3 text-center">
										{#if !isEditableSubtotal}
											<button class="flex justify-center items-center gap-2 w-full"
															on:click={makeEditableSubtotal}
											>
												€100
												<PencilLine class="w-4 h-4 hover:text-blue-700" id="item" />
											</button>
										{:else}
											<Input
												class="mt-1 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
												type="number" id="qty" placeholder="1"
											/>
										{/if}
									</td>
								</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div class="flex flex-col w-full mb-6">
						<div>
							<table class="table w-full text-gray-400 border-separate space-y-6 text-sm">
								<tbody>
								<tr>
									<td class="font-black text-black">
										<h5>
											Amount Due
										</h5>
									</td>
									<td class="p-3 text-center font-black text-black">
										€100
									</td>
								</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div class="w-full my-">
						<div class="flex justify-between items-center w-full gap-3 mb-2">
							<p class=" font-black text-sm">
								Notes
							</p>
						</div>
						<div class="grid w-full items-center gap-1.5 my-2">
							{#if !editableNote}
								<button class="w-full text-sm font-normal"
												on:click={() => makeEditableNote()}>
									Les factures devront être réglées en Euros (€) dès réception, et au plus tard dans un délai de X jours
									(délai inférieur ou égal à 45 jours fin de mois ou 60 jours) à partir de la date de leur émission
									<PencilLine class="w-4 h-4 hover:text-blue-700" id="item" />
								</button>
							{:else}
								<textarea
									class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
									type="text" id="notes" placeholder="Notes" />
							{/if}
						</div>
					</div>

					<div class="w-full">
						<div class="flex justify-between items-center w-full gap-3 mb-2">
							<p class=" font-black text-sm">
								Terms
							</p>
						</div>
						<div class="grid w-full items-center gap-1.5 my-2">
							{#if !editableTerms}
								<button class="w-full text-sm font-normal"
												on:click={() => makeEditableTerms()}>
									Les factures devront être réglées en Euros (€) dès réception, et au plus tard dans un délai de X jours
									(délai inférieur ou égal à 45 jours fin de mois ou 60 jours) à partir de la date de leur émission
									<PencilLine class="w-4 h-4 hover:text-blue-700" id="item" />
								</button>
							{:else}
								<textarea
									class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:bg-white"
									type="text" id="notes" placeholder="Notes" />
							{/if}
						</div>
					</div>

					<div class="flex justify-end items-center gap-2 w-full my-8">
						<ButtonUi label="Enregistrer en tant que brouillon" />
						<ButtonUi label="Envoyer la facture" />
					</div>
				</div>
			</div>
		</div>

		<Preview />
	</div>
</section>
