<script lang="ts">
	import * as Drawer from '$lib/components/Drawer';
	import { borderImage } from '$lib/assets';
	import { goto } from '$app/navigation';

	let { trigger, content } = $props<{ trigger?: any; content?: any }>();
	let isOpen = $state(false);

	function handleSelection(to: string) {
		goto(to);
		isOpen = false;
	}

</script>

<Drawer.Root open={isOpen}>
	<Drawer.Trigger onclick={() => (isOpen = true)} class="">{@render trigger?.()}</Drawer.Trigger
	>
	<Drawer.Content
		style="border-image-source: url({borderImage})"
		class="bone-panel-drawer m-auto max-w-[400px]"
	>
		{@render content?.()}
		<div class="text-shadow-necro flex flex-col gap-10 p-10">
			<button
				onclick={() => {
					handleSelection('/feats/1');
				}}
				class="bred bp2">Feats</button
			>
			<button
				onclick={() => {
					handleSelection('/calc1');
				}}
				class="bred bp">Rune calculator</button
			>
			<button
				onclick={() => {
					handleSelection('/feats/2');
				}}
				class="bred bp">hello2</button
			>
			<button
				onclick={() => {
					handleSelection('/feats/3');
				}}
				class="bred bp">hello3</button
			>
		</div>
		<Drawer.Footer>
			<Drawer.Close>Cancel</Drawer.Close>
		</Drawer.Footer>
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
		border-image-slice: 20 fill;
		border-image-width: 40px 70px;
		border-image-outset: 20px 10px;
		background: none;
	}
</style>
