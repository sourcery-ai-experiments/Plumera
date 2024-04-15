<script lang="ts">
	import { Printer, Scan } from 'lucide-svelte';
	import { FileText } from 'svelte-radix';
</script>

<div class="w-2/4 bg-white px-6 py-6 rounded-xl">
	<div class="flex justify-between">
		<h3 class="text-black text-lg font-semibold">Preview</h3>
		<div class="flex justify-center items-center gap-2">
			<Scan class="text-black hover:text-blue-700 w-5 h-5" />
			<FileText class="text-black hover:text-blue-700 w-5 h-5" />
			<Printer class="text-black hover:text-blue-700 w-5 h-5" />
		</div>
	</div>
</div>
