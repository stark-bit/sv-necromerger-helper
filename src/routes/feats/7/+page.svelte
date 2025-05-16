<script lang="ts">
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';
	import reward0 from '$lib/assets/images/Altar_L1.png';
	import reward1 from '$lib/assets/images/Blood_Rune_2.webp';
	import reward2 from '$lib/assets/images/Blood_Chest.webp';
	import reward3 from '$lib/assets/images/Poison_Chest.webp';
	import reward4 from '$lib/assets/images/Slime_Potion_L3.webp';

	const title = 'Tier 7 feats';
	const unlockText = 'Unlocks the Altar';
	const tasks = {
		1: 'Build a Slime Vat',
		2: 'Own a Lvl 4+ Mummy',
		3: 'Beat The Knight twice.',
		4: 'Own a Lvl 3+ Supply Cupboard.'
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
