<script lang="ts">
	import FeatScroll from '$lib/components/feat-scroll.svelte';
	import FeatTaskReward from '$lib/components/feat-task-reward.svelte';
	import FeatTask from '$lib/components/feat-task.svelte';
	import reward0 from '$lib/images/Foul_Chicken_L1.gif';
  import reward1 from '$lib/images/Cauldron_L1.gif';
	import reward2 from '$lib/images/Ice_Chest.webp';
  import reward3 from '$lib/images/Poison_Rune_3.webp';
	import reward4 from '$lib/images/Chicken_Leg.webp';

  const title = 'Tier 5 feats'
  const unlockText = 'Unlocks the Foul Chicken'
  const tasks = {
  1: "Build a Supply Cupboard",
  2: "Beat The Peasant twice",
  3: "Merge things 250 times",
  4: "Own a Lvl 5+ Eye Monster"
  }
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
