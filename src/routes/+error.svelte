<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	if (page.error) {
		onMount(() => {
			goto('/rune-calc');
		});
	}
</script>

helo
