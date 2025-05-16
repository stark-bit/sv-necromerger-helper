<script lang="ts">
	import {
		soulStalkerBig,
		valuableChest,
		galacticRune3,
		galacticChest,
		energyRune3
	} from '$lib/assets';
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';

	const reward0 = soulStalkerBig;
	const reward1 = valuableChest;
	const reward2 = galacticRune3;
	const reward3 = galacticChest;
	const reward4 = energyRune3;

	const title = 'Tier 22 feats';
	const unlockText = 'Unlocks the Soul Stalker';
	const tasks = {
		1: 'Own a Shield Bot',
		2: 'Feed 5 lvl 3 Peaceful Souls to The Devourer',
		3: 'Have reached Devourer level 75.',
		4: 'Have researched all Spells to at least lvl 1'
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
