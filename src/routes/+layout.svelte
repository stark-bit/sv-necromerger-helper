<script lang="ts">
	import '../app.css';
	import {
		ownedRuneCount,
		ownedLegendaryCount,
		rebuildOwnedRuneCountFromLegendaries
	} from '$lib';
	import {
		neededLegendaryCount,
		neededLegendaryGroupMultipliers,
		rebuildNeededRuneCountFromLegendaries
	} from '$lib/hooks/legendary-shards.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let { children } = $props();

	import {
		deSerialize,
		paramState,
		serialize,
		updateParams
	} from '$lib/utils/url-param-state.svelte';
	import { page } from '$app/state';
	import { feats, level, other } from '$lib/hooks/time-shard-calculation.svelte';

	onMount(() => {
		const params = page.url.searchParams;
		const ownedRunesParam = params.get('ownedRunes') ?? params.get('runes');
		const ownedLegendariesParam = params.get('ownedLegendaries') ?? params.get('legendaries');
		const neededLegendariesParam =
			params.get('neededLegendaries') ?? params.get('legendariesShards');
		const legendaryBonusesParam = params.get('legendaryGroupBonuses');

		deSerialize(ownedRunesParam, ownedRuneCount);
		deSerialize(ownedLegendariesParam, ownedLegendaryCount);
		deSerialize(neededLegendariesParam, neededLegendaryCount);
		deSerialize(legendaryBonusesParam, neededLegendaryGroupMultipliers);

		for (const key of Object.keys(neededLegendaryGroupMultipliers)) {
			const current = neededLegendaryGroupMultipliers[
				key as keyof typeof neededLegendaryGroupMultipliers
			];
			neededLegendaryGroupMultipliers[key as keyof typeof neededLegendaryGroupMultipliers] =
				Math.min(2, Math.max(1, current)) as 1 | 2;
		}

		if (ownedLegendariesParam) {
			rebuildOwnedRuneCountFromLegendaries();
		}

		if (neededLegendariesParam) {
			rebuildNeededRuneCountFromLegendaries();
		}

		deSerialize(params.get('level'), level);
		deSerialize(params.get('feats'), feats);
		deSerialize(params.get('other'), other);
	});

	$effect(() => {
		const legendaryShardsSerialized = serialize(neededLegendaryCount);
		const hasLegendaryShards = Object.values(neededLegendaryCount).some((value) => value !== 0);
		const legendaryBonusesSerialized = serialize(neededLegendaryGroupMultipliers);
		updateParams({
			ownedRunes: serialize(ownedRuneCount),
			ownedLegendaries: serialize(ownedLegendaryCount),
			neededLegendaries: hasLegendaryShards ? legendaryShardsSerialized : undefined,
			legendaryGroupBonuses: legendaryBonusesSerialized,
			level: serialize(level),
			feats: serialize(feats),
			other: serialize(other)
		});

		// without checking for error, will cause infinite rerender loop on 404 pages
		if (!page.error) {
			goto(`?${paramState.value}`, { replaceState: true });
		}
	});
</script>

<div class="px-2 md:px-4 lg:px-8">
	{@render children()}
</div>


<style>
	:global(html, body) {
		background: #0b2047;
		color: white;
	}

	:global(body) {
		padding-bottom: 40px;
	}

	:global(.bottom-bar) {
		margin: 0 auto;
		padding-top: 0;
	}
</style>
