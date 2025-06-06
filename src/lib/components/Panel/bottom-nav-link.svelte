<script lang="ts">
	import { panel } from '$lib/assets';
	import { cn } from '$lib/utils';

	let { class: className, text }: { text?: string; class?: string } = $props();
</script>

<div class="relative">
	<img src={panel} alt="feats" class={cn('', className)} />
	<div
		class="text-shadow-necro pointer-events-none absolute top-5 left-1/2 -translate-x-1/2 text-sm"
	>
		{text}
	</div>
</div>
