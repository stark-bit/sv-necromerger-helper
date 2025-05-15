<script lang="ts">
	import ice from '$lib/images/Ice_Rune_0.png';
	import poison from '$lib/images/Poison_Rune_0.png';
	import blood from '$lib/images/Blood_Rune_0.png';
	import moon from '$lib/images/Moon_Rune_0.png';
	import death from '$lib/images/Death_Rune_0.png';
	import cosmic from '$lib/images/Cosmic_Rune_0.png';
	import { Legendary, runeCount, type Rune, legendaryCount } from '$lib';

	const runeNames: Rune[] = ['ice', 'poison', 'blood', 'moon', 'death', 'cosmic'];
	const runeMap = { ice, poison, blood, moon, death, cosmic };

	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	$effect(() => {
		const runes = Object.values(runeCount).map(String).join('-');
		const legendaries = Object.values(legendaryCount).map(String).join('-');
		const query = new URLSearchParams({ runes, legendaries }).toString();
		goto(`?${query}`);
	});

	onMount(() => {
		const params = new URLSearchParams(location.search);
		const runesParam = params.get('runes');
		const legendariesParams = params.get('legendaries');

		if (legendariesParams) {
			const values = legendariesParams.split('-').map(Number);
			const keys = Object.keys(legendaryCount);

			for (let i = 0; i < keys.length; i++) {
				if (!isNaN(values[i])) {
					legendaryCount[keys[i]] = values[i];
				}
			}
		}
		if (runesParam) {
			const values = runesParam.split('-').map(Number);
			const keys = Object.keys(runeCount);

			for (let i = 0; i < keys.length; i++) {
				if (!isNaN(values[i])) {
					runeCount[keys[i]] = values[i];
				}
			}
		}
	});
</script>

{#snippet runes(rune: string, label: Rune)}
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
	<Legendary legend="lich" />
	<Legendary legend="gorgon" />
	<Legendary legend="harpy" />
	<Legendary legend="reaper" />
	<Legendary legend="cyclops" />
	<Legendary legend="archdemon" />
	<Legendary legend="cursed" />
	<Legendary legend="colossus" />
	<Legendary legend="infernal" />
	<Legendary legend="robot chicken" />
	<Legendary legend="shield bot" />
	<Legendary legend="stalker" />
</div>
<div class="flex-col"></div>
