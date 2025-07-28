<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import {
		LegendaryModal,
		BonePanel,
		Label,
		Slider,
		NavArrow
	} from '$lib';
	import { feats, level, other, shards } from '$lib/hooks/time-shard-calculation.svelte';

	let showPostRocket = $state(false);

	let showPostRocket = $state(false);

	function formatNumber(number: number) {
		return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 10 }).format(
			Math.floor(number)
		);
	}
</script>

<BonePanel
	class="relative m-auto mt-10 w-full max-w-[400px] px-4 pb-10"
	headerText="The Time Machine"
>
	<div class="flex flex-col">
		<div class="input">
			<Label class="relative mb-4 text-lg w-fit" for="devourer-level"
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
			<Label class="mb-4 text-lg" for="legendaries">Legendaries: {shards.legendary}%</Label>
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
