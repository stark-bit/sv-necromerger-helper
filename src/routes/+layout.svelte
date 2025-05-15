<script lang="ts">
	import { BottomNavLink } from '$lib';


	import '../app.css';
	import BonePanel from '$lib/components/Panel/bone-panel.svelte';

	let { children } = $props();
</script>

<div class="px-2 md:px-4 lg:px-8">
	{@render children()}
</div>

<div class="fixed bottom-[-170px] w-full px-8">
	<BonePanel class="bottom-bar flex h-[240px] max-w-xl gap-4 justify-center">
			<BottomNavLink text='feats' class="size-15 w-20 " href="/feats/1" />
			<BottomNavLink text='calc1' class="size-15 w-20 " href="/calc1" />
			<BottomNavLink text='calc2' class="size-15 w-20 " href="/calc2" />
	</BonePanel>
</div>

<style>
	:global(html, body) {
		background: #0b2047;
		color: white;
	}

	:global(.bottom-bar) {
		margin: 0 auto;
		padding-top: 0;
	}
</style>
