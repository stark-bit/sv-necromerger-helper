<script lang="ts">
	import { borderImage } from '$lib/assets';
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	let {
		children,
		class: className,
		header
	} = $props<{ children?: any; class?: string; header?: Snippet }>();
</script>

<div
	style="border-image-source: url({borderImage})"
	class={twMerge('panel relative m-4 p-4', className)}
>
	{@render header?.()}
	{@render children?.()}
</div>

<style>
	.panel {
		border-image-outset: 13px 8px 25px 10px;
		border-image-slice: 20 fill;
		border-image-width: 40px;
		border-image-outset: 20px 20px 5px 20px;
		background: none;
	}
</style>
