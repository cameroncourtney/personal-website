<script>
	import Footer from '$lib/components/Footer.svelte';
	import Education from '$lib/components/sections/Education.svelte';
</script>

<div id="edPage">
	<Education />
	<div id="footerWrapper">
		<Footer links={true} />
	</div>
</div>

<style>
	#edPage {
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
