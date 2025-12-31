<script lang="ts">
	import { runeCount as defaultRuneCount } from '$lib';
	import { type Rune } from '$lib/types';

	let { rune, label, count = defaultRuneCount } = $props<{
		rune: string;
		label: Rune;
		count?: Record<Rune, number>;
	}>();
</script>

<div class="">
	<img src={rune} class="m-auto block" alt="rune" />
	<div class="text-center">{count[label as keyof typeof count]}</div>
</div>
