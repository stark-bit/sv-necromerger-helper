<script lang="ts">
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';
	import reward0 from '$lib/images/Mana_Pool_L1.png';
	import reward1 from '$lib/images/Ice_Rune_3.webp';
	import reward2 from '$lib/images/Mana_Potion_L2.webp';
	import reward3 from '$lib/images/Poison_Rune_2.webp';
	import reward4 from '$lib/images/Ice_Rune_3.webp';

	const title = 'Tier 3 feats';
	const unlockText = 'Unlocks the Mana Pool';
	const tasks = {
		1: 'Merge things 50 times',
		2: 'Own a Lvl 2+ Grave',
		3: 'Own a Lvl 4+ Skeleton',
		4: 'Reach Devourerlevel 5'
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
