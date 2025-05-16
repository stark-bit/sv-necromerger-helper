<script lang="ts">
	import { shieldBotAll, valuableChest, energyRune2, cosmicRune3 } from '$lib/assets';
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';

	const reward0 = shieldBotAll;
	const reward1 = valuableChest;
	const reward2 = energyRune2;
	const reward3 = valuableChest;
	const reward4 = cosmicRune3;

	const title = 'Tier 20 feats';
	const unlockText = 'Unlocks the Shield Bot';
	const tasks = {
		1: 'Own an Archdemon',
		2: 'Beat 9 Cadets',
		3: 'Have all Champions in the lair at the same time.',
		4: 'Feed 3 full Guzzlers to The Devourer'
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
