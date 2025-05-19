<script lang="ts">
	import { borderImage, header } from '$lib/assets';
	import { cn } from '$lib/utils';
	let {
		children,
		class: className,
		headerText
	} = $props<{ children?: any; class?: string; headerText?: string }>();
</script>

<div
	style="border-image-source: url({borderImage})"
	class={cn('panel relative m-4 p-4', className)}
>
	<div style="border-image-source: url({header})" class="header">
		{headerText}
	</div>

	{@render children?.()}
</div>

<style>
	.header {
		border-image-slice: 17 14;
		border-image-width: 40px;
		border-image-outset: 15px;
		background: none;
		margin: -35px auto 1rem;
		width: fit-content;
		padding: 0px 40px;
	}

	.panel {
		border-image-slice: 20 fill;
		border-image-width: 40px;
		border-image-outset: 20px 20px 5px 20px;
		background: none;
	}
</style>
