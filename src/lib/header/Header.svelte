<script lang="ts">
	import { page } from '$app/stores';
</script>

<header
	class="fixed lg:relative bg-secondary-1 bottom-0 flex flex-row justify-between items-center lg:items-start lg:justify-start lg:flex-col p-5 lg:p-8 border-t lg:border-r border-primary-1 lg:h-screen w-full lg:w-1/5"
>
	<div class="inline-flex items-center">
		<img class=" h-12 lg:h-55px mr-5" src="/logo-prometheus.svg" alt="Prometheus Logo" />
		<span class="text-xl font-light text-white">Prometheus</span>
	</div>

	<button class="lg:hidden text-white">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-9 w-9"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
		</svg>
	</button>

	<nav class="hidden lg:flex flex-col gap-3 mt-10">
		<a class="text-base" sveltekit:prefetch href="/">The Fire Rises</a>
		<a class="text-base" sveltekit:prefetch href="/">Apprenticeship Consultancy</a>
	</nav>
</header>

<!--
	<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			<li class:active={$page.url.pathname === '/todos'}>
				<a sveltekit:prefetch href="/todos">Todos</a>
			</li>
		</ul>

-->
