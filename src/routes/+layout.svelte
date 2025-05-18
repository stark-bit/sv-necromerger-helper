<script lang="ts">
	import { BottomNavLink } from '$lib';
	import BoneDrawer from '$lib/components/features/bone-drawer.svelte';

	let { children } = $props();

	import '../app.css';
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

	:global(.bottom-bar) {
		margin: 0 auto;
		padding-top: 0;
	}
</style>
