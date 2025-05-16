<script lang="ts">
	import { thronesMana, valuableChest, pearlGold, energyChest } from '$lib/assets';
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';

	const reward0 = thronesMana;
	const reward1 = valuableChest;
	const reward2 = pearlGold;
	const reward3 = energyChest;
	const reward4 = pearlGold;

	const title = 'Tier 30 feats';
	const unlockText = 'Unlocks the Throne';
	const tasks = {
		1: 'Own a lvl 3 Darkness Golem.',
		2: 'Have reached Devourer level 450.',
		3: 'Have beaten Gid 5 times.',
		4: 'Open 500 chests.'
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
