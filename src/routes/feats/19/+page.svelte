<script lang="ts">
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';
	import reward0 from '$lib/images/Telepad.png';
	import reward1 from '$lib/images/Valuable_Chest.webp';
	import reward2 from '$lib/images/Energy_Rune_1.webp';
	import reward3 from '$lib/images/Galactic_Rune_3.webp';
	import reward4 from '$lib/images/Cosmic_Rune_3.webp';

	const title = 'Tier 19 feats';
	const unlockText = 'Unlocks the Telepad';
	const tasks = {
		1: 'Own the Robo Chicken',
		2: "Change the Crashed Saucer's colours 5 times.",
		3: 'Have reached Devourer level 55',
		4: 'Have beaten The Protector twice this run.'
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
