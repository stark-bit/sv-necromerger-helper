<script lang="ts">
	import {
		crashedSaucerAll1,
		cosmicRune2,
		valuableChest,
		deathChest,
		cosmicChest
	} from '$lib/assets';
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';

	const reward0 = crashedSaucerAll1;
	const reward1 = cosmicRune2;
	const reward2 = valuableChest;
	const reward3 = deathChest;
	const reward4 = cosmicChest;

	const title = 'Tier 17 feats';
	const unlockText = 'Unlocks the Crashed Saucer';
	const tasks = {
		1: 'Summon 5 forgotten minion',
		2: 'Own the Reaper',
		3: 'Have researched 18 spells to at least level 1',
		4: 'Have 5 Demons die in combat'
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
