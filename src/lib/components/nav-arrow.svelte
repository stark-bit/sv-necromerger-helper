<script lang="ts">
	import arrowDown from '$lib/images/Arrow_Right_1.png';
	import arrowUp from '$lib/images/Arrow_Right_0.png';

	let {
		dir = 'right',
		navNext,
		navPrev
	}: {
		navNext?: () => void;
		navPrev?: () => void;
		dir?: 'left' | 'right';
	} = $props();

	let leftArrow = $state(arrowUp);
	let rightArrow = $state(arrowUp);
</script>

{#if dir === 'left'}
	<button
		class="scale-x-[-1]"
		onclick={navPrev}
		ontouchstart={() => (leftArrow = arrowDown)}
		ontouchend={() => (leftArrow = arrowUp)}
		onmousedown={() => (leftArrow = arrowDown)}
		onmouseup={() => (leftArrow = arrowUp)}
		><img alt="arrow" class="pointer-events-none" src={leftArrow} />
	</button>
{:else}
	<button
		onclick={navNext}
		ontouchstart={() => (rightArrow = arrowDown)}
		ontouchend={() => (rightArrow = arrowUp)}
		onmousedown={() => (rightArrow = arrowDown)}
		onmouseup={() => (rightArrow = arrowUp)}
		><img alt="arrow" src={rightArrow} />
	</button>
{/if}
