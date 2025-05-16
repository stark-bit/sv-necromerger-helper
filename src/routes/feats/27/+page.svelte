<script lang="ts">
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';
	import reward0 from '$lib/assets/images/Unexpected_Parcel_L3.png';
	import reward1 from '$lib/assets/images/Valuable_Chest.webp';
	import reward2 from '$lib/assets/images/Shiny_Pearl.png';
	import reward3 from '$lib/assets/images/Time_Piece_L2.png';
	import reward4 from '$lib/assets/images/Gold_Pearl.png';

	const title = 'Tier 27 feats';
	const unlockText = 'Unlocks the Unexpected Parcel 3';
	const tasks = {
		1: 'Own a lvl 3 Mana Golem.',
		2: 'Open 250 chests.',
		3: 'Have reached Devourer level 150.',
		4: 'Have beaten the Protector in combat 20 times this run.'
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
