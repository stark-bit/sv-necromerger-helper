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

	function formatNumber(number: number) {
		return new Intl.NumberFormat('en-US', { maximumSignificantDigits: 10 }).format(
			Math.floor(number)
		);
	}

	const hasLegendaryShards = $derived(
		Object.values(shardLegendaryCount).some((value) => value > 0)
	);
	const totalShards = $derived(formatNumber(shards.total));
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
							class="absolute -top-2 -left-2 size-10 opacity-70 focus:opacity-100"
							onclick={resetLegendaryShards}
						>
							<img alt="reset-button" src={resetButton} />
						</button>
					{/if}
					{#each runeNames as rune (rune)}
						<RuneScore rune={runeMap[rune]} label={rune} count={shardRuneCount} />
					{/each}
				</div>
				<div class="m-auto grid max-w-[400px] grid-cols-3 place-items-center gap-4">
					<Legendary timeMachine legend="lich" />
					<Legendary timeMachine legend="gorgon" />
					<Legendary timeMachine legend="harpy" />
					<Legendary timeMachine legend="reaper" />
					<Legendary timeMachine legend="cyclops" />
					<Legendary timeMachine legend="archdemon" />
					<Legendary timeMachine legend="cursed" />
					<Legendary timeMachine legend="colossus" />
					<Legendary timeMachine legend="infernal" />
					<Legendary timeMachine legend="robot chicken" />
					<Legendary timeMachine legend="shield bot" />
					<Legendary timeMachine legend="stalker" />
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
