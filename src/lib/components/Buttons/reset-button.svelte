<script lang="ts">
	import { resetButton } from '$lib/assets';
	import { twMerge } from 'tailwind-merge';

	let { class: className, to = '/' } = $props<{ class?: string | string[]; to?: string }>();

  function fullRefresh(to: string) {
    location.href = to

  }
</script>

<button onclick={() =>fullRefresh(to)}
	class={twMerge('size-10', className)}><img alt="reset-button" src={resetButton} /></button
>

<style>
button:hover {
  mix-blend-mode: difference;
}

</style>
