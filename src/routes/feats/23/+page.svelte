<script lang="ts">
	import { prismIce1, gem3, energyRune3, cosmicChest, galacticRune3 } from '$lib/assets';
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';

	const reward0 = prismIce1;
	const reward1 = gem3;
	const reward2 = energyRune3;
	const reward3 = cosmicChest;
	const reward4 = galacticRune3;

	const title = 'Tier 23 feats';
	const unlockText = 'Unlocks the Prism';
	const tasks = {
		1: 'Open 100 chests.',
		2: 'Feed 3 lvl 3 Vengeful Spirits to the Devourer.',
		3: 'Destroy 9 Telepads.',
		4: 'Have 5 Forgotten Minions in the lair at the same time.'
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
