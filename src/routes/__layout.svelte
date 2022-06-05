<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<svelte:head>
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />

	<link rel="manifest" href="/favicon/site.webmanifest" />
</svelte:head>

<Header />

<section class="main-container">
	<div class="main-body active">
		<slot />
	</div>
</section>
