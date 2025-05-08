<script lang="ts">
	import FeatScroll from '$lib/components/feat-scroll.svelte';
	import FeatTaskReward from '$lib/components/feat-task-reward.svelte';
	import FeatTask from '$lib/components/feat-task.svelte';
	import reward0 from '$lib/images/Portal_L1.gif';
	import reward1 from '$lib/images/Valuable_Chest.webp';
	import reward2 from '$lib/images/Moon_Chest.webp';
	import reward3 from '$lib/images/Ham.webp';
	import reward4 from '$lib/images/Death_Rune_3.webp';

	const title = 'Tier 15 feats';
	const unlockText = 'Unlocks the Portal';
	const tasks = {
		1: 'Own the Harpy',
		2: 'Feed a Lvl 3 Abomination to The Devourer.',
		3: 'Own a Lvl 4+ Lectern',
		4: 'Merge things 2,500 times'
	};
</script>

{#snippet unlock()}
	<img alt="feat reward" class="unlock" src={reward0} />
{/snippet}

<FeatScroll {title} {unlockText} {unlock}>
	<FeatTask text={tasks[1]} />
	<FeatTaskReward>
		<img alt="task reward 1" class="scale-120" src={reward1} />
	</FeatTaskReward>
	<FeatTask text={tasks[2]} />
	<FeatTaskReward>
		<img alt="task reward 2" class="scale-120" src={reward2} />
	</FeatTaskReward>
	<FeatTask text={tasks[3]} />
	<FeatTaskReward>
		<img alt="task reward 3" class="scale-120" src={reward3} />
	</FeatTaskReward>
	<FeatTask text={tasks[4]} />
	<FeatTaskReward>
		<img alt="task reward 4" class="scale-120" src={reward4} />
	</FeatTaskReward>
</FeatScroll>

<style>
	.unlock {
		transform: scale(1.5);
	}
</style>
