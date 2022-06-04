<script lang="ts">
	export let title = '';
</script>

<svelte:head>
	<title>Prometheus {title.length > 0 ? `- ${title}` : ``}</title>
</svelte:head>
