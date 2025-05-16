<script lang="ts">
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';
	import reward0 from '$lib/assets/images/Unexpected_Parcel_L1.png';
	import reward1 from '$lib/assets/images/Time_Piece_L1.png';
	import reward2 from '$lib/assets/images/Galactic_Rune_3.webp';
	import reward3 from '$lib/assets/images/Gem_3.gif';
	import reward4 from '$lib/assets/images/Energy_Chest.png';

	const title = 'Tier 25 feats';
	const unlockText = 'Unlocks the Unexpected Parcel 1';
	const tasks = {
		1: 'Use the Unstable Rift 5 times.',
		2: 'Have reached Devourer level 95.',
		3: 'Merge 3 Unicorns with other minions.',
		4: 'Max out all spells.'
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
