<script lang="ts">
	import { header } from '$lib/assets';
	import { cn } from '$lib/utils';

	let { children, klass } = $props<{ children: any; klass: string }>();
</script>

<div style="border-image-source: url({header})" class={cn('panel relative m-2 p-2', klass)}>
	{@render children()}
</div>

<style>
	.panel {
		font-family: 'NecroMerger';
		font-size: 22px;
		text-shadow:
			-1.5px -1.5px 0 #000,
			0 -1.5px 0 #000,
			1.5px -1.5px 0 #000,
			1.5px 0 0 #000,
			1.5px 1.5px 0 #000,
			0 1.5px 0 #000,
			-1.5px 1.5px 0 #000,
			-1.5px 0 0 #000;
		border-image-width: 0px 100px 100px;
		border-image-outset: 16px 20px;
		border-image-slice: 33;
		margin-bottom: 20px;
		text-align: center;
	}
</style>
