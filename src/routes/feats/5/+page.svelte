<script lang="ts">
	import { foulChicken1, cauldron1, iceChest, poisonRune3, chickenLeg } from '$lib/assets';
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';

	const reward0 = foulChicken1;
	const reward1 = cauldron1;
	const reward2 = iceChest;
	const reward3 = poisonRune3;
	const reward4 = chickenLeg;

	const title = 'Tier 5 feats';
	const unlockText = 'Unlocks the Foul Chicken';
	const tasks = {
		1: 'Build a Supply Cupboard',
		2: 'Beat The Peasant twice',
		3: 'Merge things 250 times',
		4: 'Own a Lvl 5+ Eye Monster'
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
