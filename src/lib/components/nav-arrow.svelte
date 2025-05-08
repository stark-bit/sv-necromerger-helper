<script lang="ts">
	import right1 from '$lib/images/Arrow_Right_1.png';
	import right0 from '$lib/images/Arrow_Right_0.png';
	import { goto } from '$app/navigation';

	let { pageNum, dir = 'right' } = $props<{ pageNum: number; dir?: 'left' | 'right' }>();

	function prevFeat() {
		goto(String(pageNum > 1 ? pageNum - 1 : pageNum));
	}
	function nextFeat() {
		goto(String(pageNum < 30 ? pageNum + 1 : pageNum));
	}

	let displayImg1 = $state(right0);
	let displayImg2 = $state(right0);
</script>

{#if dir === 'left'}
<button class="scale-x-[-1]" onclick={prevFeat}
	><img
		onmouseleave={() => (displayImg1 = right0)}
		onmouseenter={() => (displayImg1 = right1)}
		alt="arrow"
		src={displayImg1}
	/>
</button>
{:else}
		<button onclick={nextFeat}
			><img
				onmouseleave={() => (displayImg2 = right0)}
				onmouseenter={() => (displayImg2 = right1)}
				alt="arrow"
				src={displayImg2}
			/>
		</button>
{/if}
