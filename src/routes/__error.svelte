<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	/// @ts-ignore
	export async function load({ error, status }) {
		return {
			props: {
				title: `${status}`,
				message: `${error.message}`
			}
		};
	}
</script>

<script lang="ts">
	export let title: string;
	export let message: string;
</script>

<h1>{title}</h1>
<p>{message}</p>
