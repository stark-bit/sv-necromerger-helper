<script lang="ts">
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';

	export let data;

	const { feat } = data;
</script>

{#snippet unlock()}
	<img alt="feat reward" class="unlock" src={feat.unlock} />
{/snippet}

<FeatScroll title={feat.title} unlockText={feat.unlockText} {unlock}>
	{#each Object.values(feat.tasks) as task, i (task.text)}
		<FeatTask  text={task.text} />
		<FeatTaskReward>
			<img alt="task reward {i}" class="scale-120" src={task.reward} />
		</FeatTaskReward>
	{/each}
</FeatScroll>

<style>
	.unlock {
		transform: scale(1.5);
	}
</style>
