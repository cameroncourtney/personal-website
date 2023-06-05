<script lang="ts">
	import Links from "./Links.svelte";
	export let links: boolean;
</script>

<!-- Footer component that links LinkedIn, Github, and my email. Also contains name at bottom. -->
<div id="footerWrapper">
	<div id="footer" class="w-full">
		{#if links}
			<div id="iconContainer">
				<Links></Links>
			</div>
		{/if}
		<div class="h-5">Cameron Courtney © 2023</div>
	</div>
</div>

<style>
	#iconContainer {
		display: flex;
		flex-direction: row;
		gap: 2rem;
		justify-content: center;
		align-items: center;
	}

	#footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		gap: 0.5rem;
	}

	#footerWrapper {
		position: absolute;
        bottom: 0;
	}
</style>
