<script lang="ts">
	import { runeCount } from '$lib';
	import { type Rune } from '$lib/types';

	let { rune, label } = $props<{ rune: string; label: Rune }>();
</script>

<div class="">
	<img src={rune} class="m-auto block" alt="rune" />
	<div class="text-center">{runeCount[label as keyof typeof runeCount]}</div>
</div>