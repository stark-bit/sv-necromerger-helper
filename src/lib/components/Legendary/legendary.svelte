<script lang="ts">
	import * as shards from '$lib/hooks/legendary-shards.svelte';
	import * as cost from '$lib/hooks/legendary-cost.svelte';
	import { legendMap, type Legend } from '$lib/assets';
	import { NavArrow } from '$lib';
	let { legend, enableOwned }: { legend: Legend; enableOwned?: boolean } = $props();
</script>

<div class="w-fit text-center">
	<img src={legendMap[legend]} alt={legend} class="m-auto h-20" />
	<div class="capitalize">{legend}</div>
	<div class="counter flex flex-col gap-4">
		{#if enableOwned}
			<div class="flex gap-4">
				<NavArrow class="size-5 invert-100" dir="left" onclick={() => cost.dec(legend)} />
				<div aria-label="count" class="">{cost.legendaryCount[legend]}</div>
				<NavArrow class="size-5 invert-100" onclick={() => cost.inc(legend)} />
			</div>
		{:else}
			<div class="flex gap-4">
				<NavArrow class="size-5" dir="left" onclick={() => shards.dec(legend)} />
				<div aria-label="count" class="">{shards.legendaryCount[legend]}</div>
				<NavArrow class="size-5" onclick={() => shards.inc(legend)} />
			</div>
		{/if}
	</div>
</div>
