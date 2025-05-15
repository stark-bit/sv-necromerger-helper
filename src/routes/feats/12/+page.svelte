<script lang="ts">
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';
	import reward0 from '$lib/images/Harpy_002.gif';
	import reward1 from '$lib/images/Moon_Rune_3.webp';
	import reward2 from '$lib/images/Blood_Rune_3.webp';
	import reward3 from '$lib/images/Ham.webp';
	import reward4 from '$lib/images/Moon_Chest.webp';

	const title = 'Tier 12 feats';
	const unlockText = 'Unlocks the Harpy';
	const tasks = {
		1: 'Feed 5 Lvl 3 Shades to The Devourer',
		2: 'Have a 50k+ slime cap',
		3: 'Own a Lvl 4+ Altar',
		4: 'Merge things 1,000 times'
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
