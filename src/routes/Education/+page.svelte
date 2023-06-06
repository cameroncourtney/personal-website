<script>
	import Footer from '$lib/components/Footer.svelte';
	import Education from '$lib/components/sections/Education.svelte';
</script>

<div id="aboutPage">
	<Education />
	<Footer links={true} />
</div>

<style>
	#aboutPage {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
</style>
