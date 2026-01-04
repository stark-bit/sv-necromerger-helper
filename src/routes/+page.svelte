<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { LegendaryModal, BonePanel, Label, Slider, NavArrow } from '$lib';
	import { Checkbox } from '$lib/components/checkbox';
	import * as Dialog from '$lib/components/ui/Dialog';
	import { neededLegendaryGroupMultipliers } from '$lib/hooks/legendary-shards.svelte';
	import { feats, level, other, shards } from '$lib/hooks/time-shard-calculation.svelte';

	let showPostRocket = $state(false);
	let t1BonusHack = $state(false);
	let t2BonusHack = $state(false);
	let t3BonusHack = $state(false);
	let t4BonusHack = $state(false);
	let t5BonusHack = $state(false);
	const hasBonusHack = $derived(
		t1BonusHack || t2BonusHack || t3BonusHack || t4BonusHack || t5BonusHack
	);

	$effect(() => {
		t1BonusHack = neededLegendaryGroupMultipliers.t1Bonus === 2;
		t2BonusHack = neededLegendaryGroupMultipliers.t2Bonus === 2;
		t3BonusHack = neededLegendaryGroupMultipliers.t3Bonus === 2;
		t4BonusHack = neededLegendaryGroupMultipliers.t4Bonus === 2;
		t5BonusHack = neededLegendaryGroupMultipliers.t5Bonus === 2;
	});

	$effect(() => {
		neededLegendaryGroupMultipliers.t1Bonus = t1BonusHack ? 2 : 1;
		neededLegendaryGroupMultipliers.t2Bonus = t2BonusHack ? 2 : 1;
		neededLegendaryGroupMultipliers.t3Bonus = t3BonusHack ? 2 : 1;
		neededLegendaryGroupMultipliers.t4Bonus = t4BonusHack ? 2 : 1;
		neededLegendaryGroupMultipliers.t5Bonus = t5BonusHack ? 2 : 1;
	});

	function formatNumber(number: number) {
		return new Intl.NumberFormat('en-US', { maximumSignificantDigits: 10 }).format(
			Math.floor(number)
		);
	}
</script>

<!--












-->

<BonePanel
	class="relative m-auto mt-10 w-full max-w-[400px] px-4 pb-10"
	headerText="The Time Machine"
>
	<div class="flex flex-col">
		<div class="input">
			<Label class="relative mb-4 w-fit text-lg" for="devourer-level"
				>Devourer: {level.value}
				<button
					style="opacity: {showPostRocket ? 1 : 0.3}"
					onclick={() => (showPostRocket = !showPostRocket)}
					class="absolute top-0 -right-10 text-2xl">🚀</button
				>
			</Label>
			<div class="flex gap-4">
				<NavArrow onclick={() => (level.value -= 1)} dir="left" />
				<Slider
					id="devourer-level"
					class=""
					type="single"
					bind:value={level.value}
					min={35}
					max={showPostRocket ? 500 : 100}
					step={1}
				/>
				<NavArrow onclick={() => (level.value += 1)} dir="right" />
			</div>
		</div>
		<div class="input">
			<button onclick={() => goto(`/feats/${feats.value}${page.url.search}`)}>
				<Label class="mb-4 text-lg" for="feats">
					Feats:
					{feats.value}</Label
				>
			</button>
			<div class="flex gap-4">
				<NavArrow onclick={() => (feats.value -= 1)} dir="left" />
				<Slider
					id="feats"
					class=""
					type="single"
					bind:value={feats.value}
					min={1}
					max={30}
					step={1}
				/>
				<NavArrow onclick={() => (feats.value += 1)} dir="right" />
			</div>
		</div>

		<div class="input">
			<Label class="relative mb-4 w-fit text-lg" for="legendaries">
				Legendaries: {shards.legendary}%
				<Dialog.Root>
					<Dialog.Trigger
						class="absolute top-0 -right-10 text-2xl hover:opacity-100"
						style="opacity: {hasBonusHack ? 1 : 0.3}"
					>
						🚀
					</Dialog.Trigger>
					<Dialog.Content class="max-w-xs gap-2">
						<Dialog.Title class="text-base">Group bonus hacks</Dialog.Title>
						<div class="grid gap-2">
							<label class="flex items-center gap-2 text-sm">
								<Checkbox bind:checked={t1BonusHack} />
								T1 bonus hack
							</label>
							<label class="flex items-center gap-2 text-sm">
								<Checkbox bind:checked={t2BonusHack} />
								T2 bonus hack
							</label>
							<label class="flex items-center gap-2 text-sm">
								<Checkbox bind:checked={t3BonusHack} />
								T3 bonus hack
							</label>
							<label class="flex items-center gap-2 text-sm">
								<Checkbox bind:checked={t4BonusHack} />
								T4 bonus hack
							</label>
							<label class="flex items-center gap-2 text-sm">
								<Checkbox bind:checked={t5BonusHack} />
								T5 bonus hack
							</label>
						</div>
					</Dialog.Content>
				</Dialog.Root>
			</Label>
			<LegendaryModal />
		</div>

		<div class="input">
			<Label class="mb-4 text-lg" for="other">Other: {other.value}%</Label>
			<div class="flex gap-4">
				<NavArrow onclick={() => (other.value -= 1)} dir="left" />
				<Slider
					id="other"
					class=""
					type="single"
					bind:value={other.value}
					min={100}
					max={500}
					step={1}
				/>
				<NavArrow onclick={() => (other.value += 1)} dir="right" />
			</div>
		</div>
		<div class="input">
			Devourer: {formatNumber(shards.level)}
			<br />
			Feats: {shards.feats}%
			<br />
			other: {shards.other}%
			<br />
			legendary: {shards.legendary}%
			<br />
			Total: {formatNumber(shards.total)}
		</div>
	</div>
</BonePanel>

<style>
	.input {
		font-size: 20px;
		margin-bottom: 3rem;
	}
</style>
