<script lang="ts">
	import feat_scroll from '$lib/images/feat-scroll.png';
	let {
		title,
		unlock,
		unlockText,
		children
	}: { title: string; unlock: any; unlockText: any; children: any } = $props();
</script>

<div style="background-image: url({feat_scroll})" class="feat-grid bg relative m-auto">
	<div id="title" class="absolute">{title}</div>
	<div id="unlock" class="absolute size-10">{@render unlock?.()}</div>
	<div id="unlock-text" class="absolute size-10">{@render unlockText?.()}</div>
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
		top: 5%;
		left: 22%;
		width: 56%;
		height: 4%;
		background: green;
		opacity: 0.2;
	}

	#tasks {
		top: 40%;
		left: 16%;
		width: 68%;
		height: 53%;
		background: green;
		opacity: 0.2;
	}

	#unlock {
		top: 14%;
		left: 17%;
		width: 66%;
		height: 14%;
		background: blue;
		opacity: 0.2;
	}

	#unlock-text {
		top: 28.7%;
		left: 17%;
		width: 66%;
		height: 10%;
		background: red;
		opacity: 0.3;
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
