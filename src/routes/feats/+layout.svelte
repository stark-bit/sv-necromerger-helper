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

	let pageState = $state(1);

	const handleSliderPageChange = (page: number) => {
		goto(String(page));
	};

	$effect(() => {
		handleSliderPageChange(pageNum);
	});

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
	<div class="flex justify-center gap-10 max-w-[400px] m-auto">
		<NavArrow {prev} dir="left" />
		<Slider id="page" class="" type="single" bind:value={pageNum} min={1} max={30} step={1} />
		<NavArrow {next} dir="right" />
	</div>
</div>
