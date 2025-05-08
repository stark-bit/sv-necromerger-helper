<script lang="ts">
	import FeatScroll from '$lib/components/feat-scroll.svelte';
	import FeatTaskReward from '$lib/components/feat-task-reward.svelte';
	import FeatTask from '$lib/components/feat-task.svelte';
	import reward0 from '$lib/images/Unexpected_Parcel_L5.png';
	import reward1 from '$lib/images/Valuable_Chest.webp';
	import reward2 from '$lib/images/Time_Piece_L3.png'
	import reward3 from '$lib/images/Galactic_Chest.webp';
	import reward4 from '$lib/images/Gold_Pearl.png';

	const title = 'Tier 29 feats';
	const unlockText = 'Unlocks the Unexpected Parcel 5';
	const tasks = {
		1: 'Own a lvl 3 Slime Golem.',
		2: 'Have reached Devourer level 350.',
		3: 'Have a combined Resource Cap of 1m+.',
		4: 'Have beaten the Protector in combat 30 times this run.'
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
