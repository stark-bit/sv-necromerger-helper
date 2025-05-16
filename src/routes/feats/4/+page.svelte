<script lang="ts">
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';
	import { cupboard1, iceRune3, poisonRune3, manaPotion3, poisonChest } from '$lib/assets';

	const reward0 = cupboard1;
	const reward1 = iceRune3;
	const reward2 = poisonRune3;
	const reward3 = manaPotion3;
	const reward4 = poisonChest;

	const title = 'Tier 4 feats';
	const unlockText = 'Unlocks the Cupboard';
	const tasks = {
		1: 'Build a Mana Pool',
		2: 'Open a Chest',
		3: 'Own a Lvl 3+ Grave',
		4: 'Own a level 3+ Zombie'
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
