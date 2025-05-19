<script lang="ts">
	import '../app.css';
	import { runeCount, legendaryCount } from '$lib';
	import { BottomNavLink } from '$lib';
	import BoneDrawer from '$lib/components/features/bone-drawer.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let { children } = $props();

	import {
		deSerialize,
		paramState,
		serialize,
		updateParams
	} from '$lib/utils/url-param-state.svelte';

	$effect(() => {
		const runes = $state(serialize(runeCount));
		const legendaries = $state(serialize(legendaryCount));
		updateParams({ runes, legendaries });
		goto(`?${paramState.value}`);
	});

	onMount(() => {
		const params = new URLSearchParams(location.search);
		deSerialize(params.get('runes'), runeCount);
		deSerialize(params.get('legendaries'), legendaryCount);
	});
</script>

<div class="px-2 md:px-4 lg:px-8">
	{@render children()}
</div>

{#snippet trigger()}
	<BottomNavLink text="Nav" class="size-15 w-20" />
{/snippet}
<div class="fixed right-0 bottom-0">
	<BoneDrawer {trigger} />
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
