<script lang="ts">
	import { unexpectedParcel2, valuableChest, shinyPearl, energyRune3, pearl } from '$lib/assets';
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';

	const reward0 = unexpectedParcel2;
	const reward1 = valuableChest;
	const reward2 = shinyPearl;
	const reward3 = energyRune3;
	const reward4 = pearl;

	const title = 'Tier 26 feats';
	const unlockText = 'Unlocks the Unexpected Parcel 2';
	const tasks = {
		1: 'Own at least one of each Legendary.',
		2: 'Use 5 Pearls.',
		3: 'Have a combined Resource Cap of 600k+.',
		4: 'Merge things 25,000 times.'
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
