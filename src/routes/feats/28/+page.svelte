<script lang="ts">
	import { unexpectedParcel4, energyChest, shinyPearl, gem3, galacticRune3 } from '$lib/assets';
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';

	const reward0 = unexpectedParcel4;
	const reward1 = energyChest;
	const reward2 = shinyPearl;
	const reward3 = gem3;
	const reward4 = galacticRune3;

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
