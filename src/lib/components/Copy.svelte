<script lang="ts">
	export let content: string;

	function copyToClipboard() {
		navigator.clipboard.writeText(content);
	}
</script>

<div class="copy" on:click={copyToClipboard}>{content}</div>

<style>
	.copy {
		cursor: pointer;
	}
</style>
