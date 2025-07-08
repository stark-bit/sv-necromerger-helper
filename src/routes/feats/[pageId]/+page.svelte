<script lang="ts">
	import { page } from '$app/state';
	import { feats } from '$lib/data/feats';
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';
	import { error } from '@sveltejs/kit';

	const feat = $derived(feats[page.params.pageId as keyof typeof feats]);

	$effect(() => {
		if (page.params.id && !feat) {
			throw error(404, 'Not found');
		}
	});
</script>

{#if feat}
	{#snippet unlock()}
		<img alt="feat reward" class="unlock" src={feat.unlock} />
	{/snippet}

	<FeatScroll title={feat.title} unlockText={feat.unlockText} {unlock}>
		{#each Object.values(feat.tasks) as task, i (task.text)}
			<FeatTask text={task.text} />
			<FeatTaskReward>
				<img alt="task reward {i}" class="scale-120" src={task.reward} />
			</FeatTaskReward>
		{/each}
	</FeatScroll>
{/if}

<style>
	.unlock {
		transform: scale(1.5);
	}
</style>
