<script lang="ts">
	import { runeMap, runes as runeNames } from '$lib/assets';
	import { Legendary, ResetButton, BonePanel, RuneScore } from '$lib';
</script>

<BonePanel headerText="Rune calculator" class="relative m-auto mt-10 w-fit px-4 pb-10">
	<ResetButton to="/rune-calc" class="absolute top-2 right-0 z-50 opacity-70 focus:opacity-100" />
	<div class="flex justify-center gap-[8px]">
		{#each runeNames as rune (rune)}
			<RuneScore rune={runeMap[rune]} label={rune} />
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
