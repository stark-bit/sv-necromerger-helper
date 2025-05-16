<script lang="ts">
	import { lectern1, valuableChest, bloodChest, steak, moonRune2 } from '$lib/assets';
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';

	const reward0 = lectern1;
	const reward1 = valuableChest;
	const reward2 = bloodChest;
	const reward3 = steak;
	const reward4 = moonRune2;

	const title = 'Tier 11 feats';
	const unlockText = 'Unlocks the Lectern';
	const tasks = {
		1: 'Own the Lich',
		2: 'Beat The Cleric twice',
		3: 'Own a Lvl 4+ Slime Vat',
		4: 'Open 25 chests'
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
