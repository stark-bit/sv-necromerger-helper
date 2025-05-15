<script lang="ts">
	let { legend }: { legend: Legend } = $props();
	import {
		lich,
		gorgon,
		harpy,
		reaper,
		cyclops,
		archdemon,
		cursed,
		colossus,
		infernal,
		roboChicken,
		shieldBot,
		stalker,
		NavArrow,
		type Legend,
		dec,
		inc,
		legendaryCount
	} from '$lib';

	const legendsLabelMap = {
		lich,
		gorgon,
		harpy,
		reaper,
		cyclops,
		archdemon,
		cursed,
		colossus,
		infernal,
		'robot chicken': roboChicken,
		'shield bot': shieldBot,
		stalker
	};
</script>

<div class="w-fit text-center">
	<img src={legendsLabelMap[legend]} alt={legend} class="m-auto h-20" />
	<div class="capitalize">{legend}</div>
	<div class="counter flex gap-4">
		<NavArrow class="size-5" dir="left" prev={() => dec(legend)} />
		<div aria-label="count" class="">{legendaryCount[legend]}</div>
		<NavArrow class="size-5" next={() => inc(legend)} />
	</div>
</div>
