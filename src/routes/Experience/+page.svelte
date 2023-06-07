<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
</script>

<div id="expPage">
	<Experience />
	<div id="footerWrapper">
		<Footer links={true} />
	</div>
</div>

<style>
	#expPage {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		height: 100%;
	}

	#footerWrapper {
		position: relative;
		bottom: 0;
	}
</style>
