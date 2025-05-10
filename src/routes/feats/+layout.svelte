<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import NavArrow from '$lib/components/nav-arrow.svelte';
	import { onDestroy, onMount } from 'svelte';
	let { children } = $props();

	function getLastSegment(url: URL): string {
		const parts = url.pathname.split('/').filter(Boolean);
		return parts.at(-1) ?? '';
	}

	let pageNum: number = $state(1);

	onMount(() => {
		pageNum = Number(getLastSegment(page.url));
	});

	$effect(() => {
		pageNum = Number(getLastSegment(page.url));
	});

	function navPrev() {
		goto(String(pageNum > 1 ? pageNum - 1 : pageNum));
	}

	function navNext() {
		goto(String(pageNum < 30 ? pageNum + 1 : pageNum));
	}
	function handleKey(e: KeyboardEvent) {
		if (e.key === 'ArrowRight') {
			navNext();
		}
		if (e.key === 'ArrowLeft') {
			navPrev();
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKey);
	});

	onDestroy(() => {
		window.removeEventListener('keydown', handleKey);
	});
</script>

<div class="">
	{@render children()}
	<div class="flex justify-center gap-10">
		<NavArrow {navPrev} dir="left" />
		<NavArrow {navNext} dir="right" />
	</div>
</div>
