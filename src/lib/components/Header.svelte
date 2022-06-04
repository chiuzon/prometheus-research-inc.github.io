<script lang="ts">
	import { page } from '$app/stores';
	import config from '$lib/constants/config';
	import routes from '$lib/constants/routes';

	let menuEnabled = false;

	function toggleMenu() {
		document.querySelector('html')?.classList.toggle('menu-on');
	}
</script>

<div class="dimmer" />
<div class="sidebar">
	<div class="logo-container">
		<img src="imgs/logo-prometheus.svg" alt="Logo" />
		<h1>Prometheus</h1>
	</div>

	<div>
		<img
			alt="On Menu"
			src="imgs/icon-menu.svg"
			class="mobile-menu-btn open"
			on:click={toggleMenu}
		/>
		<img
			alt="Off Menu"
			src="imgs/icon-arrow.svg"
			class="mobile-menu-btn close"
			on:click={toggleMenu}
		/>
	</div>

	<div class="menu">
		<div class="sidebar-links">
			{#each Object.keys(routes) as routeId}
				<a
					class:active={$page.url.pathname === routeId}
					href={routeId}
					class="nav-tab active"
					sveltekit:prefetch>{routes[routeId].label}</a
				>
			{/each}
		</div>
		<div class="sidebar-footer">
			{#each Object.keys(config.FOOTER_LINKS) as footerLinkId}
				<a href={config.FOOTER_LINKS[footerLinkId].href} target="_blank"
					>{config.FOOTER_LINKS[footerLinkId].label}</a
				>
			{/each}
			<p>{config.COPYRIGHT}</p>
		</div>
	</div>
</div>
