<script lang="ts">
	import { telepad, valuableChest, energyRune1, galacticRune3, cosmicRune3 } from '$lib/assets';
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';

	const reward0 = telepad;
	const reward1 = valuableChest;
	const reward2 = energyRune1;
	const reward3 = galacticRune3;
	const reward4 = cosmicRune3;

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
