<script>
	// #495a8f
</script>

<div id="mainContainer">
	<section class="bg-surface-500" id="aboutContainer">
		<div>
			Intro
		</div>
		<div>
			Intro 2 
		</div>
	</section>
	<!-- <section id="aboutContainer">
		<div id="aboutCard" class="card p-4 bg-surface-100-800-token">About Me</div>
	</section> -->
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
		justify-content: flex-start;
		align-items: center;
		gap: 0.5rem; 
	}

	#aboutContainer {
		/* Height is viewport minus height of the header and footer. */
		height: calc(100vh - 56px - 104px);
		width: 100%;
		flex-direction: column;
		display: flex;
		/* margin-left: 1rem;
		margin-right: 1rem;
		margin-top: 1rem; */
		justify-content: center;
		align-items: center;
	}

	#aboutCard {
		width: 100%;
		height: 100%;
	}

	/* #layout {
		display: flex;
		flex-direction: column;
		margin: 1rem;
		gap: 1rem;
	} */
</style>
