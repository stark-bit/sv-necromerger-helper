<script lang="ts">
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';
import reward0 from '$lib/images/Devourer_1_Idle.gif';
	import reward1 from '$lib/images/Ice_Rune_1.webp';
	import reward2 from '$lib/images/Ice_Rune_1.webp';
	import reward3 from '$lib/images/Ice_Rune_2.webp';
	import reward4 from '$lib/images/Ice_Rune_2.webp';

	const title = 'Tier 1 feats';
	const unlockText = 'Unlocks the Devourer';
	const tasks = {
		1: 'Create 5 Bones',
		2: 'Summon a Skeleton',
		3: 'Create a bigger Ice Rune pile',
		4: 'Tap The NecroMerger 10 times'
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
