<script lang="ts">
	import { gorgonBig, poisonChest, moonRune2, bloodChest, bloodRune3 } from '$lib/assets';
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';

	const reward0 = gorgonBig;
	const reward1 = poisonChest;
	const reward2 = moonRune2;
	const reward3 = bloodRune3;
	const reward4 = bloodChest;

	const title = 'Tier 10 feats';
	const unlockText = 'Unlocks the Gorgon';
	const tasks = {
		1: 'Have researched 6 different spells',
		2: 'Own a Lvl 4 Bat',
		3: 'Have 5 Snakes die in combat',
		4: 'Own a Lvl 4+ Supply Cupboard'
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
