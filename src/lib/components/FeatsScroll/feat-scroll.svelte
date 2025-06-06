<script lang="ts">
	import { feat_scroll } from '$lib/assets';
	let {
		title,
		unlock,
		unlockText,
		children
	}: { title: string; unlock: any; unlockText: string; children: any } = $props();
</script>

<div
	style="background-image: url({feat_scroll})"
	class="text-shadow-necro feat-grid bg relative m-auto text-center"
>
	<div id="title" class="text-shadow-necro absolute">{title}</div>
	<div id="unlock" class="absolute grid place-items-center">
		<div>{@render unlock?.()}</div>
	</div>
	<div id="unlock-text" class="absolute flex size-10 items-center justify-center">
		<div>{unlockText}</div>
	</div>
	<div id="tasks" class="absolute">
		<div class="task-grid">
			{@render children()}
		</div>
	</div>
</div>

<style>
	.task-grid {
		display: grid;
		grid-template-columns: 2.7fr 1fr; /* 2 equal columns */
		grid-template-rows: repeat(4, 1fr); /* 4 equal rows */
		gap: 4%;
		width: 100%;
		height: 100%;
	}

	#title {
		top: 4.5%;
		left: 22%;
		width: 56%;
		height: 4%;
		font-size: 20px;
	}

	#tasks {
		top: 40%;
		left: 16%;
		width: 68%;
		height: 53%;
	}

	#unlock {
		top: 14%;
		left: 17%;
		width: 66%;
		height: 14%;
	}

	#unlock-text {
		top: 28.7%;
		left: 17%;
		width: 66%;
		height: 10%;
	}

	.bg {
		width: 100%;
		max-width: 400px;
		min-width: 350px;
		background-repeat: no-repeat;
		background-size: contain;
		aspect-ratio: 350 / 550;
		background-image: url('your-image.jpg');
		background-position: center;
		position: relative;
	}
</style>
