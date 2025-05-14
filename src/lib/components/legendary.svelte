<script lang="ts">
	import lich from '$lib/images/Lich.gif';
	import gorgon from '$lib/images/Gorgon_002.gif';
	import harpy from '$lib/images/Harpy_002.gif';
	import reaper from '$lib/images/Reaper.gif';
	import cyclops from '$lib/images/Cyclops_002.gif';
	import archdemon from '$lib/images/Archdemon_002.gif';
	import cursed from '$lib/images/Cursed.gif';
	import colossus from '$lib/images/Colossus.gif';
	import infernal from '$lib/images/The_Infernal.gif';
	import roboChicken from '$lib/images/Robot_Chicken.gif';
	import shieldBot from '$lib/images/Shield_Bot_All.gif';
	import stalker from '$lib/images/Soul_Stalker.gif';
	import NavArrow from '$lib/components/nav-arrow.svelte';

	let count = $state(0);
	const legends = {
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
	type Legend = keyof typeof legends;

	let {
		legend,
		onChange
	}: { legend: Legend; onChange: (legend: Legend, count: number, action: 'inc' | 'dec') => void } =
		$props();

	function inc() {
		if ((legend === 'cursed' || legend === 'colossus' || legend === 'infernal') && count === 1) {
			return null;
		}

		if ((legend === 'shield bot' || legend === 'robot chicken') && count === 3) {
			return null;
		}
		count = count + 1;
		onChange(legend, count, 'inc');
	}
	function dec() {
		if (count <= 0) {
			return null;
		}
		count = count <= 0 ? count : count - 1;
		onChange(legend, count, 'dec');
	}
</script>

<div class="w-fit text-center">
	<img src={legends[legend]} alt={legend} class="m-auto h-20" />
	<div class="capitalize">{legend}</div>
	<div class="counter flex gap-4">
		<NavArrow class="size-5" dir="left" prev={dec} />
		<div aria-label="count" class="">{count}</div>
		<NavArrow class="size-5" next={inc} />
	</div>
</div>
