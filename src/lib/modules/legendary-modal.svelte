<script lang="ts">
	import { Legendary, RuneScore } from '$lib';
	import { borderImage } from '$lib/assets';
	import { runeMap, runes as runeNames } from '$lib/assets';
	import * as Dialog from '$lib/components/ui/Dialog';
	import { Button } from 'bits-ui';
</script>

<Dialog.Root>
	<Dialog.Trigger>
		<Button.Root
			style="border-image-source: url({borderImage})"
			class="legendary-button rounded-input inline-flex h-12 items-center justify-center
	 px-5 text-lg text-white shadow-xl
 active:scale-[0.98] active:transition-all"
		>
			Legendaries
		</Button.Root>
	</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header>
			<div class="flex justify-center gap-[8px]">
				{#each runeNames as rune (rune)}
					<RuneScore rune={runeMap[rune]} label={rune} />
				{/each}
			</div>

			<Dialog.Description>
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
			</Dialog.Description>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>

<style>
	:global(.legendary-button) {
		border-image-slice: 20 fill;
		border-image-width: 50px;
	}
</style>
