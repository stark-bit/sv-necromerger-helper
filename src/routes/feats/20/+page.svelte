<script lang="ts">
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';
	import reward0 from '$lib/assets/images/Shield_Bot_All.gif';
	import reward1 from '$lib/assets/images/Valuable_Chest.webp';
	import reward2 from '$lib/assets/images/Energy_Rune_2.webp';
	import reward3 from '$lib/assets/images/Valuable_Chest.webp';
	import reward4 from '$lib/assets/images/Cosmic_Rune_3.webp';

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
