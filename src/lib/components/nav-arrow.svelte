<script lang="ts">
	import right1 from '$lib/images/Arrow_Right_1.png';
	import right0 from '$lib/images/Arrow_Right_0.png';
	import { goto } from '$app/navigation';

	let { pageNum, dir = 'right' } = $props<{ pageNum: number; dir?: 'left' | 'right' }>();

	function prevFeat() {
		goto(String(pageNum > 1 ? pageNum - 1 : pageNum));
		displayImg1 = right0;
	}

	function nextFeat() {
		goto(String(pageNum < 30 ? pageNum + 1 : pageNum));
		displayImg2 = right0;
	}

	let displayImg1 = $state(right0);
	let displayImg2 = $state(right0);
</script>

{#if dir === 'left'}
	<button
		class="scale-x-[-1]"
		ontouchstart={() => (displayImg1 = right1)}
		onmousedown={() => (displayImg1 = right1)}
		onmouseup={prevFeat}
		><img alt="arrow" class="pointer-events-none" src={displayImg1} />
	</button>
{:else}
	<button
		ontouchstart={() => (displayImg2 = right1)}
		onmousedown={() => (displayImg2 = right1)}
		onmouseup={nextFeat}
		><img alt="arrow" src={displayImg2} />
	</button>
{/if}
