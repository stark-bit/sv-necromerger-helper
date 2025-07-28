<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { NavArrow, Slider } from '$lib';
	import { onDestroy, onMount } from 'svelte';
	let { children } = $props();

	function getLastSegment(url: URL): string {
		const parts = url.pathname.split('/').filter(Boolean);
		return parts.at(-1) ?? '';
	}

	const handleSliderPageChange = (page: number) => {
		goto(`${page}?${searchParams}`);
	};

	let isFirstLoad = true;
	$effect(() => {
		if (isFirstLoad) {
			isFirstLoad = false;
			return;
		}
		handleSliderPageChange(pageNum);
	});

	let pageNum: number = $derived(Number(getLastSegment(page.url)));

	let searchParams = $state();

	onMount(() => {
		searchParams = page.url.searchParams.toString();
	});

	function prev() {
		goto(`${pageNum > 1 ? pageNum - 1 : pageNum}${page.url.search}`);
	}

	function next() {
		goto(`${pageNum < 30 ? pageNum + 1 : pageNum}${page.url.search}`);
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
	<div class="m-auto flex max-w-[400px] justify-center gap-10">
		<NavArrow onclick={prev} dir="left" />
		<Slider id="page" class="" type="single" bind:value={pageNum} min={1} max={30} step={1} />
		<NavArrow onclick={next} dir="right" />
	</div>
</div>
