<script lang="ts">
	import Links from '$lib/components/Links.svelte';
</script>

<div id="homeSection">
	<!-- Main container with name, links, etc. -->
	<section id="introContainer">
		<div id="intro">
			<div class="text-6xl">Cameron Courtney</div>
			<div class="text-3xl">Software Engineer</div>
			<Links />
			<a href="../CameronCourtneyResume.pdf" type="button" class="btn variant-soft-surface text-xl">
				<span><i class="fa-solid fa-user" /></span>
				<span>Resume</span>
			</a>
		</div>
	</section>
</div>

<style>
	#intro {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		min-height: 90%;
		box-sizing: border-box;
	}

	#homeSection {
		display: flex;
		box-sizing: border-box;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	#introContainer {
		height: 100%;
		width: 100%;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
