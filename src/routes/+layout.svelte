<script lang="ts">
	import '../app.css';
	import {
		runeCount,
		legendaryCount,
		BottomNavLink,
		BoneDrawerNav,
	} from '$lib';
  import {legendaryCount as legendaryCountShards } from '$lib/hooks/legendary-shards.svelte'
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
		deSerialize(params.get('runes'), runeCount);
		deSerialize(params.get('legendaries'), legendaryCount);
		deSerialize(params.get('legendariesShards'), legendaryCountShards);
		deSerialize(params.get('level'), level);
		deSerialize(params.get('feats'), feats);
		deSerialize(params.get('other'), other);
	});

	$effect(() => {
		updateParams({
			runes: serialize(runeCount),
			legendaries: serialize(legendaryCount),
			legendariesShards: serialize(legendaryCountShards),
			level: serialize(level),
			feats: serialize(feats),
			other: serialize(other)
		});

		// without checking for error, will cause infinite rerender loop on 404 pages
		if (!page.error) {
			goto(`?${paramState.value}`);
		}
	});
</script>

<div class="px-2 md:px-4 lg:px-8">
	{@render children()}
</div>

{#snippet trigger()}
	<BottomNavLink text="Nav" class="size-15 w-20" />
{/snippet}
<div class="fixed right-0 bottom-0">
	<BoneDrawerNav {trigger} />
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
