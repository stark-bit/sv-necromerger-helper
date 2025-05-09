<script lang="ts">
	import { page } from '$app/state';
	import NavArrow from '$lib/components/nav-arrow.svelte';
	let { children } = $props();

	function getLastSegment(url: URL): string {
		const parts = url.pathname.split('/').filter(Boolean);
		return parts.at(-1) ?? '';
	}

	let pageNum = $state(Number(getLastSegment(page.url)));
	let params = $state(page.url.searchParams);

	$effect(() => {
		pageNum = Number(getLastSegment(page.url));
	});
</script>

<div class="">
	{@render children()}
	<div class="flex justify-center gap-10">
		<NavArrow {pageNum} dir="left" />
		<NavArrow {pageNum} dir="right" />
	</div>
</div>
