<script lang="ts">
	import {
		soulGrinder1,
		valuableChest,
		galacticChest,
		energyRune2,
		cosmicChest
	} from '$lib/assets';
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';

	const reward0 = soulGrinder1;
	const reward1 = valuableChest;
	const reward2 = galacticChest;
	const reward3 = energyRune2;
	const reward4 = cosmicChest;

	const title = 'Tier 21 feats';
	const unlockText = 'Unlocks the Soul Grinder';
	const tasks = {
		1: 'Own The Cursed, The Colossus or The Infernal',
		2: 'Have reached the Devourer level 65',
		3: 'Merge things 7,500 times.',
		4: 'Have a combined Resource Cap of 400k+'
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
