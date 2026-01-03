<script lang="ts">
	import { runeMap, runes as runeNames } from '$lib/assets';
	import { Legendary, RuneScore } from '$lib';
	import {
		runeCount as shardRuneCount,
		legendaryCount as shardLegendaryCount,
		resetLegendaryShards
	} from '$lib/hooks/legendary-shards.svelte';
	import { shards } from '$lib/hooks/time-shard-calculation.svelte';
	import { borderImage } from '$lib/assets';
	import * as Dialog from '$lib/components/ui/Dialog';
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

<Dialog.Root>
	<Dialog.Trigger>
		<Button.Root
			style="border-image-source: url({borderImage})"
			class="legendary-button rounded-input inline-flex h-12 items-center justify-center
	 px-5 text-lg text-white shadow-xl
 active:scale-[0.98] active:transition-all"
		>
			Legendaries
		</Button.Root>
	</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Description>
				<div class="absolute -top-1 left-1/2 -translate-x-1/2 text-center text-lg text-nowrap">
					Total shards: {totalShards} -
					{shards.legendary}%
				</div>
				<div class="relative flex justify-center gap-[8px]">
					{#if hasLegendaryShards}
						<button
							class="absolute -top-4 -left-4 size-8 opacity-70 focus:opacity-100"
							onclick={resetLegendaryShards}
						>
							<img alt="reset-button" src={resetButton} />
						</button>
					{/if}
					<div class="flex flex-col">
						<div class="flex justify-end relative gap-5">
							{#each runeNames as rune (rune)}
								<RuneScore rune={runeMap[rune]} label={rune} count={shardRuneCount} />
							{/each}
						</div>
						<div class="right-0 flex gap-4">
							<Checkbox bind:checked={enableOwned} /> Show Owned
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
			</Dialog.Description>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>

<style>
	:global(.legendary-button) {
		border-image-slice: 20 fill;
		border-image-width: 50px;
	}
</style>
