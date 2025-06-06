<script lang="ts">
	import { LegendaryModal, BonePanel, Label, Slider, feats, level, other, shards } from '$lib';

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
			<Label class="mb-4 text-lg" for="devourer-level">Devourer: {level.value}</Label>
			<Slider
				id="devourer-level"
				class=""
				type="single"
				bind:value={level.value}
				min={35}
				max={500}
				step={1}
			/>
		</div>
		<div class="input">
			<Label class="mb-4 text-lg" for="feats">Feats: {feats.value}</Label>
			<Slider
				id="feats"
				class=""
				type="single"
				bind:value={feats.value}
				min={1}
				max={30}
				step={1}
			/>
		</div>

		<div class="input">
			<Label class="mb-4 text-lg" for="legendaries">Legendaries: {shards.legendary}%</Label>
			<LegendaryModal />
		</div>

		<div class="input">
			<Label class="mb-4 text-lg" for="devourer-level">Other: {other.value}%</Label>
			<Slider
				id="devourer-level"
				class=""
				type="single"
				bind:value={other.value}
				min={100}
				max={500}
				step={1}
			/>
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
