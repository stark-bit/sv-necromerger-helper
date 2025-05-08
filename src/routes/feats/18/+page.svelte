<script lang="ts">
	import FeatScroll from '$lib/components/feat-scroll.svelte';
	import FeatTaskReward from '$lib/components/feat-task-reward.svelte';
	import FeatTask from '$lib/components/feat-task.svelte';
	import reward0 from '$lib/images/Archdemon_002.gif';
	import reward1 from '$lib/images/Valuable_Chest.webp';
	import reward2 from '$lib/images/Cosmic_Chest.webp';
	import reward3 from '$lib/images/Galactic_Rune_3.webp';
	import reward4 from '$lib/images/Cosmic_Rune_3.webp';

	const title = 'Tier 18 feats';
	const unlockText = 'Unlocks the Archdemon';
	const tasks = {
		1: 'Own a Cyclops',
		2: 'Have 3 Undead Aliens win fights',
		3: 'Have a combined Resource Cap of 200k+',
		4: 'Merge things 5,000 times'
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
