<script lang="ts">
	import { Info, SquareMenu } from 'lucide-svelte';
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

			<div class="bg-[#f2f5fd] p-6 mt-6 rounded-xl">
				<div class="flex flex-col items-center">
					<div class="flex justify-between items-center w-full mb-6">
						<p>
							Add Logo
						</p>
						<Info />
					</div>

					<div class="border border-dashed border-gray-500 relative bg-[#e7effc] rounded-xl">
						<input type="file" multiple class="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50">
						<div class="text-center p-10 absolute top-0 right-0 left-0 m-auto">
							<img src="/images/upload.svg" alt="upload" class="w-20 h-20 m-auto">
							<h4>
								Drop your image here or <span class="text-blue-700">brower</span>
							</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="w-2/4 bg-white px-6 py-6 rounded-xl">
			Preview
		</div>
	</div>
</section>
