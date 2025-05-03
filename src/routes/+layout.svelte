<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="px-2 md:px-4 lg:px-8">
	{@render children()}
</div>

<style>
	:global(html, body) {
		background: #0b2047;
		color: white;
	}
</style>
