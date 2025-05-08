<script lang="ts">
	import FeatScroll from '$lib/components/feat-scroll.svelte';
	import FeatTaskReward from '$lib/components/feat-task-reward.svelte';
	import FeatTask from '$lib/components/feat-task.svelte';
	import reward0 from '$lib/images/Unexpected_Parcel_L4.png';
	import reward1 from '$lib/images/Energy_Chest.png';
	import reward2 from '$lib/images/Shiny_Pearl.png';
	import reward3 from '$lib/images/Gem_3.gif';
	import reward4 from '$lib/images/Galactic_Rune_3.webp';

	const title = 'Tier 28 feats';
	const unlockText = 'Unlocks the Unexpected Parcel 4';
	const tasks = {
		1: 'Have 9 Forgotten Minions in the lair at the same time.',
		2: 'Own 4 Shield Bots, Robo Chickens and Archdemons.',
		3: 'Have reached Devourer level 250.',
		4: 'Merge things 50,000 times.'
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
