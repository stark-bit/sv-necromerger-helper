<script lang="ts">
	import { portal1, valuableChest, moonChest, ham, deathRune3 } from '$lib/assets';
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';

	const reward0 = portal1;
	const reward1 = valuableChest;
	const reward2 = moonChest;
	const reward3 = ham;
	const reward4 = deathRune3;

	const title = 'Tier 15 feats';
	const unlockText = 'Unlocks the Portal';
	const tasks = {
		1: 'Own the Harpy',
		2: 'Feed a Lvl 3 Abomination to The Devourer.',
		3: 'Own a Lvl 4+ Lectern',
		4: 'Merge things 2,500 times'
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
