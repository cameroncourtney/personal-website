<script>
    // import Typewriter from 'svelte-typewriter'
</script>


<div id="mainContainer">
	<section id="aboutContainer">
		<div class="text-6xl">
			Cameron Courtney
		</div>
	</section>
	<section class="variant-filled-primary" id="aboutContainer">
		<div class="text-7xl">Cameron Courtney 2</div>
	</section>
</div>
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
		width: 100%;
		min-height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.5rem; 
		text-align: center;
	}

	/* #intro {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	} */

	#aboutContainer {
		/* Height is viewport minus height of the header and footer. 
		Header is 56px, footer is 104px. */
		min-height: calc(100vh - 56px);
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		/* margin-left: 1rem;
		margin-right: 1rem;
		margin-top: 1rem; */
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}

	#aboutCard {
		width: 100%;
		height: 100vh;
	}

	/* #layout {
		display: flex;
		flex-direction: column;
		margin: 1rem;
		gap: 1rem;
	} */
</style>
