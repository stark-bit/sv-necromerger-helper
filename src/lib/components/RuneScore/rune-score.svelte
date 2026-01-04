<script lang="ts">
	import { neededRuneCount } from '$lib/hooks/legendary-shards.svelte';
	import { ownedRuneCount } from '$lib/hooks/legendary-cost.svelte';
	import { type Rune } from '$lib/types';

	let { rune, label } = $props<{
		rune: string;
		label: Rune;
		count?: Record<Rune, number>;
	}>();
</script>

<div class="">
	<img src={rune} class="m-auto block" alt="rune" />
	<div class="text-center">
		{neededRuneCount[label as keyof typeof neededRuneCount] -
			ownedRuneCount[label as keyof typeof neededRuneCount]}
	</div>
</div>
