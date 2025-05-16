<script lang="ts">
	import { slimeVat1, poisonChest, manaPotion3, gem2, poisonRune3 } from '$lib/assets';
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';

	const reward0 = slimeVat1;
	const reward1 = poisonChest;
	const reward2 = manaPotion3;
	const reward3 = gem2;
	const reward4 = poisonRune3;

	const title = 'Tier 6 feats';
	const unlockText = 'Unlocks the Slime Vat';
	const tasks = {
		1: 'Reach Devourer level 10',
		2: 'Own a Lvl 3+ Mana Pool',
		3: 'Open 5 chests',
		4: 'Own a Lvl 3+ Spider'
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
