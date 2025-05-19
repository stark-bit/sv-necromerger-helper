<script lang="ts">
	import { Legendary, runeCount } from '$lib';
	import { runeMap, runes as runeNames } from '$lib/assets';
	import { type Rune } from '$lib/types';

	import ResetButton from '$lib/components/Buttons/reset-button.svelte';
	import BonePanel from '$lib/components/Panel/bone-panel.svelte';
</script>

{#snippet runes(rune: string, label: Rune)}
	<div class="">
		<img src={rune} class="m-auto block" alt="rune" />
		<div class="text-center">{runeCount[label]}</div>
	</div>
{/snippet}

<ResetButton to="/calc1" class="absolute right-0 top-0" />
<BonePanel headerText='Rune calculator' class="m-auto mt-10 w-fit px-4 pb-10">
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
</BonePanel>
