<script lang="ts">
	import { Legendary, runeCount, legendaryCount } from '$lib';
	import { runeMap, runes as runeNames } from '$lib/assets';
	import { type Rune } from '$lib/types';

	//const runeNames: Rune[] = ['ice', 'poison', 'blood', 'moon', 'death', 'cosmic'];

	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import ResetButton from '$lib/components/Buttons/reset-button.svelte';

  let query = $state('');
	$effect(() => {
		let runes = $state(Object.values(runeCount).map(String).join('-'));
		let legendaries = $state(Object.values(legendaryCount).map(String).join('-'));
		 query = new URLSearchParams({ runes, legendaries }).toString();
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

<ResetButton to='/calc1' class='absolute right-0' />
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
