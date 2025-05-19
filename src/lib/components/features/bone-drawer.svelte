<script lang="ts">
	import * as Drawer from '$lib/components/ui/Drawer';
	import { borderImage, close, header } from '$lib/assets';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let { trigger } = $props<{ trigger?: any }>();
	let isOpen = $state(false);

	function handleSelection(to: string) {
		goto(to+'?'+params);
		isOpen = false;
	}

  let params = $state();
  onMount(() => {
		params = new URLSearchParams(location.search);
  });
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
					handleSelection('/feats/1');
				}}
				class="bp">Feats</button
			>
			<button
				style="border-image-source: url({header})"
				onclick={() => {
					handleSelection('/calc1');
				}}
				class="bp">Rune calculator</button
			>
			<button
				style="border-image-source: url({header})"
				onclick={() => {
					handleSelection('/feats/2');
				}}
				class="bp">Time shards</button
			>
			<button
				style="border-image-source: url({header})"
				onclick={() => {
					handleSelection('/feats/3');
				}}
				class="bp">hello3</button
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
		border-image-slice: 16 fill;
		border-image-width: 40px;
		border-image-outset: 14px 10px;
		background: none;
	}
</style>
