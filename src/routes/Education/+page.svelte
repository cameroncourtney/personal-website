<script>
	import Footer from '$lib/components/Footer.svelte';
	import Education from '$lib/components/sections/Education.svelte';
</script>

<div id="edPage">
	hello
</div>
<Education></Education>

<style>
	#edPage {
		display: flex;
		background: green;
		/* flex-direction: column; */
		justify-content: center;
		align-items: center;
		text-align: center;
		height: 100%;
		width: 100%;
		margin-right: 10rem;
	}

	#footerWrapper {
		position: relative;
		bottom: 0;
	}
</style>
