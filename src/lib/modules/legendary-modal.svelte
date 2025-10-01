<script lang="ts">
	import { Legendary } from '$lib';
	import { borderImage } from '$lib/assets';
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
			<Dialog.Description>
				<div class="m-auto grid max-w-[400px] grid-cols-3 place-items-center gap-4">
					<Legendary timeMachine legend="lich" />
					<Legendary timeMachine legend="gorgon" />
					<Legendary timeMachine legend="harpy" />
					<Legendary timeMachine legend="reaper" />
					<Legendary timeMachine legend="cyclops" />
					<Legendary timeMachine legend="archdemon" />
					<Legendary timeMachine legend="cursed" />
					<Legendary timeMachine legend="colossus" />
					<Legendary timeMachine legend="infernal" />
					<Legendary timeMachine legend="robot chicken" />
					<Legendary timeMachine legend="shield bot" />
					<Legendary timeMachine legend="stalker" />
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
