<script lang="ts">
	import FeatScroll from '$lib/components/feat-scroll.svelte';
	import FeatTaskReward from '$lib/components/feat-task-reward.svelte';
	import FeatTask from '$lib/components/feat-task.svelte';
	import reward0 from '$lib/images/Gorgon_002.gif';
	import reward1 from '$lib/images/Poison_Chest.webp';
	import reward2 from '$lib/images/Moon_Rune_2.webp';
	import reward3 from '$lib/images/Blood_Rune_3.webp';
	import reward4 from '$lib/images/Blood_Chest.webp';

	const title = 'Tier 10 feats';
	const unlockText = 'Unlocks the Gorgon';
	const tasks = {
		1: 'Have researched 6 different spells',
		2: 'Own a Lvl 4 Bat',
		3: 'Have 5 Snakes die in combat',
		4: 'Own a Lvl 4+ Supply Cupboard'
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
