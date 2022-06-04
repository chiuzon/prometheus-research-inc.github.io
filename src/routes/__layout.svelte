<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<Header />

<section class="main-container">
	<div class="main-body active">
		<slot />
	</div>
</section>
