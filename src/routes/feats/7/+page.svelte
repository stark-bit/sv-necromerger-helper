<script lang="ts">
	import { altar1, bloodRune2, bloodChest, poisonChest, slimePotion3 } from '$lib/assets';
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';

	const reward0 = altar1;
	const reward1 = bloodRune2;
	const reward2 = bloodChest;
	const reward3 = poisonChest;
	const reward4 = slimePotion3;

	const title = 'Tier 7 feats';
	const unlockText = 'Unlocks the Altar';
	const tasks = {
		1: 'Build a Slime Vat',
		2: 'Own a Lvl 4+ Mummy',
		3: 'Beat The Knight twice.',
		4: 'Own a Lvl 3+ Supply Cupboard.'
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
