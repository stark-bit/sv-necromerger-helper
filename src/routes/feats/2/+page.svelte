<script lang="ts">
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';
	import { grave1, manaPotion1, iceRune2, iceRune3 } from '$lib/assets';

	const reward0 = grave1;
	const reward1 = manaPotion1;
	const reward2 = manaPotion1;
	const reward3 = iceRune2;
	const reward4 = iceRune3;

	const title = 'Tier 2 feats';
	const unlockText = 'Unlocks the Grave';
	const tasks = {
		1: 'Feed the Devourer a Bone',
		2: 'Feed a rune pile to The Devourer',
		3: 'Own a Lvl 3+ Skeleton',
		4: 'Reach Devourer level 2'
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
