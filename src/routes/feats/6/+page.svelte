<script lang="ts">
	import FeatScroll from '$lib/components/feat-scroll.svelte';
	import FeatTaskReward from '$lib/components/feat-task-reward.svelte';
	import FeatTask from '$lib/components/feat-task.svelte';
	import reward0 from '$lib/images/Slime_Vat_L1.png';
	import reward1 from '$lib/images/Poison_Chest.webp';
	import reward2 from '$lib/images/Mana_Potion_L3.webp';
	import reward3 from '$lib/images/Gem_2.gif';
	import reward4 from '$lib/images/Poison_Rune_3.webp';

	const title = 'Tier 6 feats';
	const unlockText = 'Unlocks the Slime Vat';
	const tasks = {
		1: 'Reach Devourer level 10',
		2: 'Own a Lvl 3+ Mana Pool',
		3: 'Open 5 chests',
		4: 'Own a Lvl 3+ Spider'
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
