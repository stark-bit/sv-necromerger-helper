<script lang="ts">
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';
	import reward0 from '$lib/images/Unexpected_Parcel_L2.png';
	import reward1 from '$lib/images/Valuable_Chest.webp';
	import reward2 from '$lib/images/Shiny_Pearl.png';
	import reward3 from '$lib/images/Energy_Rune_3.webp';
	import reward4 from '$lib/images/Pearl.png';

	const title = 'Tier 26 feats';
	const unlockText = 'Unlocks the Unexpected Parcel 2';
	const tasks = {
		1: 'Own at least one of each Legendary.',
		2: 'Use 5 Pearls.',
		3: 'Have a combined Resource Cap of 600k+.',
		4: 'Merge things 25,000 times.'
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
