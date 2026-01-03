<script lang="ts">
	import { runeCount, runeCount as runeCountNeeded } from '$lib/hooks/legendary-shards.svelte';
	import { runeCount as runeCountOwned } from '$lib/hooks/legendary-cost.svelte';
	import { type Rune } from '$lib/types';

	let { rune, label } = $props<{
		rune: string;
		label: Rune;
		count?: Record<Rune, number>;
	}>();
</script>

<div class="">
	<img src={rune} class="m-auto block" alt="rune" />
	<div class="text-center">
		{runeCountNeeded[label as keyof typeof runeCount] -
			runeCountOwned[label as keyof typeof runeCount]}
	</div>
</div>
