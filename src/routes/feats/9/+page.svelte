<script lang="ts">
	import { darkStores1, gem3, bloodRune3, bloodChest, steak } from '$lib/assets';
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';

	const reward0 = darkStores1;
	const reward1 = gem3;
	const reward2 = bloodRune3;
	const reward3 = bloodChest;
	const reward4 = steak;

	const title = 'Tier 9 feats';
	const unlockText = 'Unlocks the Dark Stores';
	const tasks = {
		1: 'Beat the Thief twice',
		2: 'Have reached Devourer level 20',
		3: 'Own a Lvl 4+ Grave',
		4: 'Merge things 500 times.'
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
