<script lang="ts">
	import * as neededStore from '$lib/hooks/legendary-shards.svelte';
	import * as ownedStore from '$lib/hooks/legendary-cost.svelte';
	import { legendMap, type Legend } from '$lib/assets';
	import { NavArrow } from '$lib';
	let { name, showOwnedCounts }: { name: Legend; showOwnedCounts?: boolean } = $props();
</script>

<div class="w-fit text-center">
	<img src={legendMap[name]} alt={name} class="m-auto h-20" />
	<div class="capitalize">{name}</div>
	<div class="counter flex flex-col gap-4">
		{#if showOwnedCounts}
			<div class="flex gap-4">
				<NavArrow
					class="size-5 invert-100"
					dir="left"
					onclick={() => ownedStore.decOwnedLegendary(name)}
				/>
				<div aria-label="count" class="">
					{ownedStore.ownedLegendaryCount[name]}
				</div>
				<NavArrow
					class="size-5 invert-100"
					onclick={() => ownedStore.incOwnedLegendary(name)}
				/>
			</div>
		{:else}
			<div class="flex gap-4">
				<NavArrow
					class="size-5"
					dir="left"
					onclick={() => neededStore.decNeededLegendary(name)}
				/>
				<div aria-label="count" class="">
					{neededStore.neededLegendaryCount[name]}
				</div>
				<NavArrow
					class="size-5"
					onclick={() => neededStore.incNeededLegendary(name)}
				/>
			</div>
		{/if}
	</div>
</div>
