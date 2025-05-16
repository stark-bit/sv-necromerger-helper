<script lang="ts">
	import { unexpectedParcel1, timePiece1, galacticRune3, gem3, energyChest } from '$lib/assets';
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';

	const reward0 = unexpectedParcel1;
	const reward1 = timePiece1;
	const reward2 = galacticRune3;
	const reward3 = gem3;
	const reward4 = energyChest;

	const title = 'Tier 25 feats';
	const unlockText = 'Unlocks the Unexpected Parcel 1';
	const tasks = {
		1: 'Use the Unstable Rift 5 times.',
		2: 'Have reached Devourer level 95.',
		3: 'Merge 3 Unicorns with other minions.',
		4: 'Max out all spells.'
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
