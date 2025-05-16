<script lang="ts">
	import checkmark from '$lib/assets/images/checkmark.png';

	let { children } = $props<{ children?: any }>();

	let selected = $state(false);
</script>
<!-- maybe i will make it "right" when i figure out the overal project -->
<!-- svelte-ignore  a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	onclick={() => {
		selected = !selected;
	}}
	class="flex items-center justify-center text-sm"
>
	<div>
		{#if selected}
			<img src={checkmark} alt="checkmark" />
		{:else}
			{@render children?.()}
		{/if}
	</div>
</div>
