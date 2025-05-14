<script lang="ts">
	import ice from '$lib/images/Ice_Rune_0.png';
	import poison from '$lib/images/Poison_Rune_0.png';
	import blood from '$lib/images/Blood_Rune_0.png';
	import moon from '$lib/images/Moon_Rune_0.png';
	import death from '$lib/images/Death_Rune_0.png';
	import cosmic from '$lib/images/Cosmic_Rune_0.png';

	import Legendary from '$lib/components/legendary.svelte';

	const defaultRunes = { ice: 0, poison: 0, blood: 0, moon: 0, death: 0, cosmic: 0 };
	let runeCount = $state(defaultRunes);

	let legendaries = $state({
		lich: defaultRunes,
		gorgon: defaultRunes,
		harpy: defaultRunes,
		reaper: defaultRunes,
		cyclops: defaultRunes
	});

	function handleChange(legend: string, count: number, action: 'inc' | 'dec') {
		switch (legend?.toLowerCase()) {
			case 'lich':
				if (action === 'inc') {
					runeCount.ice += 640;
				} else {
					runeCount.ice -= 640;
				}
				break;
			case 'gorgon':
				if (action === 'inc') {
					runeCount.poison += 640;
				} else {
					runeCount.poison -= 640;
				}
				break;
			case 'harpy':
				if (action === 'inc') {
					runeCount.blood += 640;
				} else {
					runeCount.blood -= 640;
				}
				break;
			case 'reaper':
				if (action === 'inc') {
					runeCount.ice += 1600;
					runeCount.moon += 640;
				} else {
					runeCount.ice -= 1600;
					runeCount.moon -= 640;
				}
				break;
			case 'cyclops':
				if (action === 'inc') {
					runeCount.poison += 1600;
					runeCount.moon += 640;
				} else {
					runeCount.poison -= 1600;
					runeCount.moon -= 640;
				}
				break;
			case 'archdemon':
				if (action === 'inc') {
					runeCount.blood += 960;
					runeCount.death += 960;
				} else {
					runeCount.blood -= 960;
					runeCount.death -= 960;
				}
				break;
			case 'cursed':
				if (action === 'inc') {
					runeCount.ice += 2240;
					runeCount.moon += 640;
				} else {
					runeCount.ice -= 2240;
					runeCount.moon -= 640;
				}
				break;
			case 'colossus':
				if (action === 'inc') {
					runeCount.poison += 2240;
					runeCount.moon += 640;
				} else {
					runeCount.poison -= 2240;
					runeCount.moon -= 640;
				}
				break;
			case 'infernal':
				if (action === 'inc') {
					runeCount.blood += 1600;
					runeCount.death += 960;
				} else {
					runeCount.blood -= 1600;
					runeCount.death -= 960;
				}
				break;
			case 'robot chicken':
				if (action === 'inc') {
					runeCount.ice += 960;
					runeCount.poison += 480;
				} else {
					runeCount.ice -= 960;
					runeCount.poison -= 480;
				}
				break;
			case 'shield bot':
				if (action === 'inc') {
					runeCount.cosmic += 640;
				} else {
					runeCount.cosmic -= 640;
				}
				break;
			case 'stalker':
				if (action === 'inc') {
					runeCount.cosmic += 800;
					runeCount.death += 800;
				} else {
					runeCount.cosmic -= 800;
					runeCount.death -= 800;
				}
				break;

			default:
				throw new Error(`unknown legendary: ${legend}`);
		}
	}

	const runeNames = ['ice', 'poison', 'blood', 'moon', 'death', 'cosmic'];
	const runeMap = { ice, poison, blood, moon, death, cosmic };
</script>

{#snippet runes(rune: string, label: string)}
	<div class="">
		<img src={rune} class="m-auto block" alt="rune" />
		<div class="text-center">{runeCount[label]}</div>
	</div>
{/snippet}

<div class="flex justify-center gap-[8px]">
	{#each runeNames as rune}
		{@render runes(runeMap[rune], rune)}
	{/each}
</div>

<div class="m-auto grid max-w-[400px] grid-cols-3 place-items-center gap-4">
	<Legendary onChange={handleChange} legend="lich" />
	<Legendary onChange={handleChange} legend="gorgon" />
	<Legendary onChange={handleChange} legend="harpy" />
	<Legendary onChange={handleChange} legend="reaper" />
	<Legendary onChange={handleChange} legend="cyclops" />
	<Legendary onChange={handleChange} legend="archdemon" />
	<Legendary onChange={handleChange} legend="cursed" />
	<Legendary onChange={handleChange} legend="colossus" />
	<Legendary onChange={handleChange} legend="infernal" />
	<Legendary onChange={handleChange} legend="robot chicken" />
	<Legendary onChange={handleChange} legend="shield bot" />
	<Legendary onChange={handleChange} legend="stalker" />
</div>
<div class="flex-col"></div>
