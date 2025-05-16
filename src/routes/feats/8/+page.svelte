<script lang="ts">
	import { lichBig, cauldron1, bloodRune2, chickenLeg, poisonRune3 } from '$lib/assets';
	import { FeatScroll, FeatTask, FeatTaskReward } from '$lib';

	const reward0 = lichBig;
	const reward1 = cauldron1;
	const reward2 = bloodRune2;
	const reward3 = chickenLeg;
	const reward4 = poisonRune3;

	const title = 'Tier 8 feats';
	const unlockText = 'Unlocks the Lich';
	const tasks = {
		1: 'Have researched 3 different spells',
		2: 'Have a 50k+ Mana Cap',
		3: 'Own a Lvl 3+ Foul Chicken',
		4: 'Have 5 Werewolves die in combat'
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
