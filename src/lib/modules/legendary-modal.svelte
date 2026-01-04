<script lang="ts">
	import { runeMap, runes as runeNames } from '$lib/assets';
	import { Legendary, RuneScore } from '$lib';
	import { resetCount as resetCostCount } from '$lib/hooks/legendary-cost.svelte';
	import {
		runeCount as shardRuneCount,
		legendaryCount as shardLegendaryCount,
		resetCount
	} from '$lib/hooks/legendary-shards.svelte';
	import { shards } from '$lib/hooks/time-shard-calculation.svelte';
	import { borderImage, close } from '$lib/assets';
	import * as Drawer from '$lib/components/ui/Drawer';
	import { Button } from 'bits-ui';
	import { resetButton } from '$lib/assets';
	import { Checkbox } from '$lib/components/checkbox';

	function formatNumber(number: number) {
		return new Intl.NumberFormat('en-US', { maximumSignificantDigits: 10 }).format(
			Math.floor(number)
		);
	}

	const hasLegendaryShards = $derived(
		Object.values(shardLegendaryCount).some((value) => value > 0)
	);
	const totalShards = $derived(formatNumber(shards.total));

	let enableOwned = $state(false);
</script>

<!--












-->

<Drawer.Root>
	<Drawer.Trigger>
		<Button.Root
			style="border-image-source: url({borderImage})"
			class="legendary-button rounded-input inline-flex h-12 items-center justify-center
	 px-5 text-lg text-white shadow-xl
 active:scale-[0.98] active:transition-all"
		>
			Legendaries
		</Button.Root>
	</Drawer.Trigger>
	<Drawer.Content
		style="border-image-source: url({borderImage})"
		class="legendary-drawer m-auto h-full max-w-[560px]"
	>
		<div class="overflow-scroll p-6 pt-4">
			<div class="absolute top-1 left-1/2 -translate-x-1/2 text-center text-lg text-nowrap">
				Total shards: {totalShards} -
				{shards.legendary}%
			</div>
			<div class="absolute top-6 left-1/2 flex -translate-x-1/2 items-center gap-4">
				<Checkbox bind:checked={enableOwned} />{enableOwned ? 'Current' : 'Needed'}
			</div>
			<div class="relative flex justify-center gap-[8px]">
				{#if hasLegendaryShards}
					<button
						class="fixed top-2 left-4 size-8 opacity-70 focus:opacity-100"
						onclick={() => {
							resetCount();
							resetCostCount();
						}}
					>
						<img alt="reset-button" src={resetButton} />
					</button>
				{/if}
				<div class="flex flex-col">
					<div class="relative flex justify-end gap-5">
						{#each runeNames as rune (rune)}
							<RuneScore rune={runeMap[rune]} label={rune} count={shardRuneCount} />
						{/each}
					</div>
				</div>
			</div>
			<div class="m-auto grid max-w-[400px] grid-cols-3 place-items-center gap-4">
				<Legendary {enableOwned} legend="lich" />
				<Legendary {enableOwned} legend="gorgon" />
				<Legendary {enableOwned} legend="harpy" />
				<Legendary {enableOwned} legend="reaper" />
				<Legendary {enableOwned} legend="cyclops" />
				<Legendary {enableOwned} legend="archdemon" />
				<Legendary {enableOwned} legend="cursed" />
				<Legendary {enableOwned} legend="colossus" />
				<Legendary {enableOwned} legend="infernal" />
				<Legendary {enableOwned} legend="robot chicken" />
				<Legendary {enableOwned} legend="shield bot" />
				<Legendary {enableOwned} legend="stalker" />
			</div>
		</div>
		<Drawer.Close
			style="background-image: url({close})"
			class="absolute top-2 right-4 size-10 bg-cover hover:opacity-50"
		/>
	</Drawer.Content>
</Drawer.Root>

<style>
	:global(.legendary-button) {
		border-image-slice: 20 fill;
		border-image-width: 50px;
	}

	:global(.legendary-drawer) {
		border-image-slice: 20 fill;
		border-image-width: 40px 50px;
		border-image-outset: 20px 10px;
		background: none;
	}
</style>
