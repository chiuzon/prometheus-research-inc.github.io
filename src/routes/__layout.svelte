<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<div class="flex flex-col-reverse lg:flex-row h-full">
	<Header />

	<main class="lg:p-8 w-full">
		<div class="lg:border border-primary-1 rounded-lg p-8 h-full overflow-y-auto">
			<slot />
		</div>
	</main>
</div>
