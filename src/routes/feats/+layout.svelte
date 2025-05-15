<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { NavArrow } from '$lib';
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

	function prev() {
		goto(String(pageNum > 1 ? pageNum - 1 : pageNum));
	}

	function next() {
		goto(String(pageNum < 30 ? pageNum + 1 : pageNum));
	}
	function handleKey(e: KeyboardEvent) {
		if (e.key === 'ArrowRight') {
			next();
		}
		if (e.key === 'ArrowLeft') {
			prev();
		}
	}

	onMount(() => {
		if (!browser) {
			return;
		}
		window.addEventListener('keydown', handleKey);
	});

	onDestroy(() => {
		if (!browser) {
			return;
		}
		window.removeEventListener('keydown', handleKey);
	});
</script>

<div class="">
	{@render children()}
	<div class="flex justify-center gap-10">
		<NavArrow {prev} dir="left" />
		<NavArrow {next} dir="right" />
	</div>
</div>
