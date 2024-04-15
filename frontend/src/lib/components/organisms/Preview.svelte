<script lang="ts">
	import { ImagePlus, Printer, Scan } from 'lucide-svelte';
	import { FileText } from 'svelte-radix';

	let lineItems = [
		{
			item: 'Design',
			rate: 100,
			qty: 1,
			lineTotal: 100
		},
		{
			item: 'Development',
			rate: 200,
			qty: 1,
			lineTotal: 200
		},
		{
			item: 'Marketing',
			rate: 300,
			qty: 1,
			lineTotal: 300
		}
	];
</script>

<div class="w-2/4 bg-white px-6 py-6 rounded-xl">
	<div class="flex justify-between">
		<h3 class="text-black text-lg font-semibold">Preview</h3>

		<div class="flex justify-center items-center gap-2">
			<button>
				<Scan class="text-black hover:text-blue-700 w-5 h-5" />
			</button>
			<button>
				<FileText class="text-black hover:text-blue-700 w-5 h-5" />
			</button>
			<button>
				<Printer class="text-black hover:text-blue-700 w-5 h-5" />
			</button>
		</div>
	</div>

	<div class="bg-[#f2f5fd] rounded-xl my-8 p-2">
		<div class="bg-white px-6 py-2 rounded-xl overflow-auto h-[70vh]">
			<div class="flex justify-center p-4">
				<div class="flex w-1/3">
					<ImagePlus class="text-blue-700 w-10 h-10" />
				</div>

				<div class="w-full">
					<div class="flex flex-col w-full mb-6">
						<div>
							<table class="table w-full text-gray-400 border-separate space-y-6 text-sm">
								<tbody>
								<tr>
									<td class="flex items-center gap-2 p-1 text-center">
										<div class="w-full">
											<p class="text-black text-sm">
												Company
											</p>
											<p class="text-sm text-black/70">
												LetsGo
											</p>
										</div>
									</td>
									<td class="p-1 text-center">
										<div class="w-full">
											<p class="text-black text-sm">
												Address
											</p>
											<p class="text-sm text-black/70">
												1234 Main Street, Suite 123
											</p>
										</div>
									</td>
								</tr>

								<tr>
									<td class="flex items-center gap-2 p-1 text-center">
										<div class="w-full">
											<p class="text-black text-sm">
												City
											</p>
											<p class="text-sm text-black/70">
												New York
											</p>
										</div>
									</td>
									<td class="p-3 text-center">
										<div class="w-full">
											<p class="text-black text-sm">
												Address n°2
											</p>
											<p class="text-sm text-black/70">
												1234 Main Street, Suite 123
											</p>
										</div>
									</td>
								</tr>

								<tr>
									<td class="flex items-center gap-2 p-1 text-center">
										<div class="w-full">
											<p class="text-black text-sm">
												Country
											</p>
											<p class="text-sm text-black/70">
												United States
											</p>
										</div>
									</td>
									<td class="p-1 text-center">
										<div class="w-full">
											<p class="text-black text-sm">
												ZIP Code
											</p>
											<p class="text-sm text-black/70">
												12345
											</p>
										</div>
									</td>

									<td class="p-1 text-center">
										<div class="w-full">
											<p class="text-black text-sm">
												Phone
											</p>
											<p class="text-sm text-black/70">
												+1 123 456 7890
											</p>
										</div>
									</td>
								</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

			<div class="bg-blue-700 rounded-sm p-2 text-white">
				<div class="flex justify-between">
					<p>
						Billed To
					</p>

					<div class="flex justify-center items-center gap-2">
						<p>
							Amount Due
						</p>
						<p>
							$ 1,234.00
						</p>
					</div>
				</div>
			</div>

			<div class="w-full">
				<div class="flex flex-col w-full mb-6">
					<div>
						<table class="table w-full text-gray-400 border-separate space-y-6 text-sm">
							<tbody>
							<tr>
								<td class="flex items-center gap-2 p-1 text-center">
									<div class="w-full">
										<p class="text-black text-sm">
											Client
										</p>
										<p class="text-sm text-black/70">
											Francis KOUAHO
										</p>
									</div>
								</td>

								<td class="p-1 text-center">
									<div class="w-full">
										<p class="text-black text-sm">
											Address
										</p>
										<p class="text-sm text-black/70">
											1234 Main Street, Suite 123
										</p>
									</div>
								</td>

								<td class="flex items-center gap-2 p-1 text-center">
									<div class="w-full">
										<p class="text-black text-sm">
											City
										</p>
										<p class="text-sm text-black/70">
											New York
										</p>
									</div>
								</td>
							</tr>

							<tr>
								<td class="p-3 text-center">
									<div class="w-full">
										<p class="text-black text-sm">
											Address n°2
										</p>
										<p class="text-sm text-black/70">
											1234 Main Street, Suite 123
										</p>
									</div>
								</td>

								<td class="flex items-center gap-2 p-1 text-center">
									<div class="w-full">
										<p class="text-black text-sm">
											Country
										</p>
										<p class="text-sm text-black/70">
											United States
										</p>
									</div>
								</td>

								<td class="p-1 text-center">
									<div class="w-full">
										<p class="text-black text-sm">
											ZIP Code
										</p>
										<p class="text-sm text-black/70">
											12345
										</p>
									</div>
								</td>
							</tr>

							<tr>
								<td class="p-1 text-center">
									<div class="w-full">
										<p class="text-black text-sm">
											Phone
										</p>
										<p class="text-sm text-black/70">
											+1 123 456 7890
										</p>
									</div>
								</td>
							</tr>
							</tbody>
						</table>
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
						<tr class="bg-[#e7effc] rounded-lg">
							<td class="flex items-center gap-2 p-3 text-center">
								{lineItem.item}
							</td>
							<td class="p-3 text-center">
								{lineItem.rate}
							</td>
							<td class="p-3 text-center">
								{lineItem.qty}
							</td>
							<td class="p-3 text-center">
								{lineItem.lineTotal}
							</td>
						</tr>
					{/each}
					</tbody>
				</table>
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
								Discount
							</td>
							<td class="p-3 text-center">
								€100
							</td>
							<td class="p-3 text-center">
								€100
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
								Discount
							</td>
							<td class="p-3 text-center">
								€100
							</td>
							<td class="p-3 text-center">
								€100
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
					<p class="font-normal text-sm">
						Les factures devront être réglées en Euros (€) dès réception, et au plus tard dans un délai de X jours
						(délai inférieur ou égal à 45 jours fin de mois ou 60 jours) à partir de la date de leur émission
					</p>
				</div>
			</div>

			<div class="w-full">
				<div class="flex justify-between items-center w-full gap-3 mb-2">
					<p class=" font-black text-sm">
						Terms
					</p>
				</div>
				<div class="grid w-full items-center gap-1.5 my-2">
					<p class="font-normal text-sm">
						Les factures devront être réglées en Euros (€) dès réception, et au plus tard dans un délai de X jours
						(délai inférieur ou égal à 45 jours fin de mois ou 60 jours) à partir de la date de leur émission
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
