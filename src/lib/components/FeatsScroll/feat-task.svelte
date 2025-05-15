<script lang='ts'>
let { text = 'text goes here' } = $props<{text?: string}>();

</script>

<div class="flex items-center justify-center text-sm"><div>{text}</div></div>
