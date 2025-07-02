<script lang="ts">
	import { NavArrow, dec, inc, legendaryCount } from '$lib';
	import { legendMap, type Legend } from '$lib/assets';

	let { legend }: { legend: Legend } = $props();
</script>

<div class="w-fit text-center">
	<img src={legendMap[legend]} alt={legend} class="m-auto h-20" />
	<div class="capitalize">{legend}</div>
	<div class="counter flex gap-4">
		<NavArrow class="size-5" dir="left" onclick={() => dec(legend)} />
		<div aria-label="count" class="">{legendaryCount[legend]}</div>
		<NavArrow class="size-5" onclick={() => inc(legend)} />
	</div>
</div>
