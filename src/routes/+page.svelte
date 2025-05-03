<script>
	import BoneHeader from '$lib/components/bone-header.svelte';
	import BonePanel from '$lib/components/bone-panel.svelte';
</script>

{#snippet header()}
	<BoneHeader klass="max-w-80 top-[-50px] left-1/2 -translate-x-1/2 absolute w-full max-w-[360px]"
		>Bone header</BoneHeader
	>
{/snippet}

<div class="flex-col">
	<BonePanel {header} klass="pt-8 px-4 md:px-14 lg:px-20 max-w-2xl m-auto min-h-svh">hello sdf one two three</BonePanel>
</div>
