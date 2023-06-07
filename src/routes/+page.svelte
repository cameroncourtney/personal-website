<script lang="ts">
	import Footer from '../lib/components/Footer.svelte';
	import Home from '$lib/components/sections/Home.svelte';
</script>

<div id="mainContainer" class="overflow-y-auto scroll-smooth">
	<Home />
	<div id="footerWrapper">
		<Footer links={false} />
	</div>
</div>

<style>
	#mainContainer {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		justify-content: center;
		align-items: center;
		text-align: center;
		gap: 0.5rem;
		height: 100%;
		width: 100%;
	}

	#footerWrapper {
		position: absolute;
		bottom: 0;
	}
</style>
