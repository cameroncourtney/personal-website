<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
</script>

<div id="aboutPage">
	<Experience />
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
