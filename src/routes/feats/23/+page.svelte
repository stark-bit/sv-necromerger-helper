<script lang="ts">
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';
	import reward0 from '$lib/assets/images/Prism_L1_Ice.png';
	import reward1 from '$lib/assets/images/Gem_3.gif';
	import reward2 from '$lib/assets/images/Energy_Rune_3.webp';
	import reward3 from '$lib/assets/images/Cosmic_Chest.webp';
	import reward4 from '$lib/assets/images/Galactic_Rune_3.webp';

	const title = 'Tier 23 feats';
	const unlockText = 'Unlocks the Prism';
	const tasks = {
		1: 'Open 100 chests.',
		2: 'Feed 3 lvl 3 Vengeful Spirits to the Devourer.',
		3: 'Destroy 9 Telepads.',
		4: 'Have 5 Forgotten Minions in the lair at the same time.'
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
