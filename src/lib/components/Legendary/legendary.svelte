<script lang="ts">
	import * as shards from '$lib/hooks/legendary-shards.svelte';
	import * as cost from '$lib/hooks/legendary-cost.svelte';
	import { legendMap, type Legend } from '$lib/assets';
	import { NavArrow } from '$lib';
	let { legend, timeMachine = false }: { legend: Legend; timeMachine?: boolean } = $props();

	const store = timeMachine ? shards : cost;
	const { dec, inc, legendaryCount } = store;
</script>

<div class="w-fit text-center">
	<img src={legendMap[legend]} alt={legend} class="m-auto h-20" />
	<div class="capitalize">{legend}</div>
	<div class="counter flex gap-4">
		<NavArrow class="size-5" dir="left" onclick={() => dec(legend)} />
		<div aria-label="count" class="">{legendaryCount[legend]}</div>
		<NavArrow class="size-5" onclick={() => inc(legend)} />
	</div>
</div>
