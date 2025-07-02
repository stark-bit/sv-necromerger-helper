<script lang="ts">
	import { cn } from '$lib/utils';
	import { arrowDown, arrowUp } from '$lib/assets';

	let {
		dir = 'right',
		class: className,
		onclick,
	}: {
		onclick?: () => void;
		dir?: 'left' | 'right';
		class?: string;
	} = $props();

	let leftArrow = $state(arrowUp);
	let rightArrow = $state(arrowUp);
</script>

{#if dir === 'left'}
	<button
		class={cn('scale-x-[-1]', className)}
		{onclick}
		ontouchstart={() => (leftArrow = arrowDown)}
		ontouchend={() => (leftArrow = arrowUp)}
		onmousedown={() => (leftArrow = arrowDown)}
		onmouseup={() => (leftArrow = arrowUp)}
		><img alt="arrow" class="pointer-events-none" src={leftArrow} />
	</button>
{:else}
	<button
		class={cn(className)}
		{onclick}
		ontouchstart={() => (rightArrow = arrowDown)}
		ontouchend={() => (rightArrow = arrowUp)}
		onmousedown={() => (rightArrow = arrowDown)}
		onmouseup={() => (rightArrow = arrowUp)}
		><img alt="arrow" src={rightArrow} />
	</button>
{/if}
