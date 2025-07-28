<script lang="ts">
	import * as Drawer from '$lib/components/ui/Drawer';
	import { borderImage, close, feat_scroll, header, iceRune0, timeShard } from '$lib/assets';
	import { goto } from '$app/navigation';
	import { feats } from '$lib/hooks/time-shard-calculation.svelte';
	import { page } from '$app/state';

	let { trigger } = $props<{ trigger?: any }>();
	let isOpen = $state(false);

	function handleSelection(to: string) {
		goto(to + page.url.search);
		isOpen = false;
	}
</script>

<Drawer.Root open={isOpen}>
	<Drawer.Trigger onclick={() => (isOpen = true)} class="">{@render trigger?.()}</Drawer.Trigger>
	<Drawer.Content
		style="border-image-source: url({borderImage})"
		class="bone-panel-drawer m-auto max-w-[400px]"
	>
		<div class="text-shadow-necro flex flex-col gap-10 p-10">
			<button
				style="border-image-source: url({header})"
				onclick={() => {
					handleSelection('/rune-calc');
				}}
				class="bp"
			>
				<span class="relative">
					<img alt="feat reward" class="absolute -top-1 -left-8" src={iceRune0} />
					Rune calculator</span
				>
			</button>
			<button
				style="border-image-source: url({header})"
				onclick={() => {
					let currentFeat = feats.value;
					handleSelection(`/feats/${currentFeat}`);
				}}
				class="bp"
			>
				<span class="relative">
					<img alt="feat reward" class="absolute -top-1 -left-8 h-6" src={feat_scroll} />
					Feats</span
				>
			</button>
			<button
				style="border-image-source: url({header})"
				onclick={() => {
					handleSelection('/time-shard-calc');
				}}
				class="bp"
			>
				<span class="relative">
					<img alt="feat reward" class="absolute -top-1 -left-8" src={timeShard} />
					Time shard calc</span
				></button
			>
		</div>
		<Drawer.Close
			style="background-image: url({close})"
			class="absolute top-1 right-4 size-10 bg-cover hover:opacity-50"
		></Drawer.Close>
	</Drawer.Content>
</Drawer.Root>

<style>
	:global(.bone-panel-drawer) {
		border-image-slice: 20 fill;
		border-image-width: 40px 50px;
		border-image-outset: 20px 10px;
		background: none;
	}

	.bp {
		border-image-slice: 16 18;
		border-image-width: 40px;
		border-image-outset: 13px 0px;
		background: none;
		&:active {
			opacity: 0.8;
		}
	}
</style>
