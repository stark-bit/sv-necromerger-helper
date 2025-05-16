<script lang="ts">
	import { cyclopsBig, deathChest, deathRune3, ham, moonChest } from '$lib/assets';
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';

	const reward0 = cyclopsBig;
	const reward1 = deathChest;
	const reward2 = deathRune3;
	const reward3 = ham;
	const reward4 = moonChest;

	const title = 'Tier 16 feats';
	const unlockText = 'Unlocks the Cyclops';
	const tasks = {
		1: 'Beat The Rival twice',
		2: 'Have reached Devourer level 40',
		3: 'Have a 50k+ Darkness Cap.',
		4: 'Feed 5 Lvl 4 Imps to The Devourer'
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
