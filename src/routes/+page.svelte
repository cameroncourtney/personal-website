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

<!-- <Footer /> -->
<!-- <div id="layout">
	<div id="about" class="card p-4">About Me</div>
	<div id="experience" class="card p-4 bg-gradient-to-br variant-gradient-tertiary-secondary">
		Experience
	</div>
	<div class="card p-4 bg-gradient-to-br variant-gradient-tertiary-primary">Contact</div>
	<div id="projects" class="card p-4 bg-gradient-to-br variant-gradient-secondary-primary">
		Projects
	</div>
	<div class="card p-4 bg-gradient-to-br variant-gradient-secondary-tertiary">Projects</div>
	<div class="card p-4 bg-gradient-to-br variant-gradient-primary-secondary">Contact</div>
	<div class="card p-4 bg-gradient-to-br variant-gradient-primary-tertiary">Contact</div>
	<div class="card p-4 variant-filled-primary">blue</div>
	<div class="card p-4 variant-filled-secondary">Contact</div>
	<div class="card p-4 variant-filled-tertiary">Contact</div>
	<div class="card p-4 variant-filled-success">Contact3</div>
	<div class="card p-4 variant-filled-warning">Contact4</div>
	<div id="contact" class="card p-4 variant-filled-error">Contact3</div>
</div> -->

<style>
	#mainContainer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		gap: 0.5rem;
		height: 100%;
	}

	#footerWrapper {
		position: absolute;
		bottom: 0;
	}
</style>
