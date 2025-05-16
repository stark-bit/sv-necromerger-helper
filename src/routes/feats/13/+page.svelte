<script lang="ts">
	import { fridge1, valuableChest, coin4, bloodChest, moonChest } from '$lib/assets';
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';

	const reward0 = fridge1;
	const reward1 = valuableChest;
	const reward2 = coin4;
	const reward3 = bloodChest;
	const reward4 = moonChest;

	const title = 'Tier 13 feats';
	const unlockText = 'Unlocks the Fridge';
	const tasks = {
		1: 'Own the Gorgon',
		2: 'Make 2 trades with the Merchant',
		3: 'Have researched 12 different spells',
		4: 'Have reached Devourer level 30'
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
