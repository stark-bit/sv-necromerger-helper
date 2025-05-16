<script lang="ts">
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';
	import reward0 from '$lib/assets/images/Reaper.gif';
	import reward1 from '$lib/assets/images/Death_Rune_2.webp';
	import reward2 from '$lib/assets/images/Coin_4.webp';
	import reward3 from '$lib/assets/images/Moon_Chest.webp';
	import reward4 from '$lib/assets/images/Moon_Rune_3.webp';

	const title = 'Tier 14 feats';
	const unlockText = 'Unlocks the Reaper';
	const tasks = {
		1: 'Summon a forgotten minion',
		2: 'Feed a Lvl 2 Golden Goose to The Devourer.',
		3: 'Beat The Paladin twice.',
		4: 'Own a Lvl 5+ Dark Stores.'
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
