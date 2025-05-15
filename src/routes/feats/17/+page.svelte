<script lang="ts">
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';
	import reward0 from '$lib/images/Crashed_Saucer_All_L1.gif';
	import reward1 from '$lib/images/Cosmic_Rune_2.webp';
	import reward2 from '$lib/images/Valuable_Chest.webp';
	import reward3 from '$lib/images/Death_Chest.webp';
	import reward4 from '$lib/images/Cosmic_Chest.webp';

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
