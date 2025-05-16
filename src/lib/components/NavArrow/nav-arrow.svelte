<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { arrowDown, arrowUp } from '$lib/assets';

	let {
		dir = 'right',
		class: className,
		next,
		prev
	}: {
		next?: () => void;
		prev?: () => void;
		dir?: 'left' | 'right';
		class?: string;
	} = $props();

	let leftArrow = $state(arrowUp);
	let rightArrow = $state(arrowUp);
</script>

{#if dir === 'left'}
	<button
		class={twMerge('scale-x-[-1]', className)}
		onclick={prev}
		ontouchstart={() => (leftArrow = arrowDown)}
		ontouchend={() => (leftArrow = arrowUp)}
		onmousedown={() => (leftArrow = arrowDown)}
		onmouseup={() => (leftArrow = arrowUp)}
		><img alt="arrow" class="pointer-events-none" src={leftArrow} />
	</button>
{:else}
	<button
		class={twMerge(className)}
		onclick={next}
		ontouchstart={() => (rightArrow = arrowDown)}
		ontouchend={() => (rightArrow = arrowUp)}
		onmousedown={() => (rightArrow = arrowDown)}
		onmouseup={() => (rightArrow = arrowUp)}
		><img alt="arrow" src={rightArrow} />
	</button>
{/if}
