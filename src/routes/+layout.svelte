<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	// import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// My custom theme
	import '../theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';

	function sectionScroll(section: string) {
		const ref = document.getElementById(section);
		console.log(ref);
		ref?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<!-- Main wrapper component around application -->
<AppShell>
	<!-- Header Contents -->
	<div id="navContainer">
		<!-- <button type="button" class="btn !bg-transparent" on:click={() => sectionScroll('about')}> -->
		<h1 on:click={() => sectionScroll('about')} class="h3" id="header">About</h1>
		<h1 on:click={() => sectionScroll('experience')} class="h3" id="header">Experience</h1>
		<h1 on:click={() => sectionScroll('projects')} class="h3" id="header">Projects</h1>
		<h1 on:click={() => sectionScroll('contact')} class="h3" id="header">Contact</h1>
		<div>
			<LightSwitch class="white" width="w-14" height="h-7" />
		</div>
		<!-- </button>
				<button
					type="button"
					class="btn !bg-transparent"
					on:click={() => sectionScroll('experience')}
				>
					<h1 class="h3" id="header">Experience</h1>
				</button>
				<button
					type="button"
					class="btn !bg-transparent"
					on:click={() => sectionScroll('projects')}
				>
					<h1 class="h3" id="header">Projects</h1>
				</button>
				<button type="button" class="btn !bg-transparent" on:click={() => sectionScroll('contact')}>
					<h1 class="h3" id="header">Contact</h1>
				</button> -->
	</div>
	<!-- <svelte:fragment slot="trail">
			<LightSwitch class="white" width="w-14" height="h-7" />
		</svelte:fragment> -->
	<slot />
	<svelte:fragment slot="pageFooter">
		<div id="footer">
			<div id="iconContainer">
				<a href="https://linkedin.com/in/cameron-courtney">
					<i id="icon" class="fa-brands fa-linkedin text-4xl" />
				</a>
				<a href="mailto: cameroncourtney@utexas.edu">
					<i id="icon" class="fa-regular fa-envelope text-4xl" />
				</a>
				<a href="https://github.com/cameroncourtney">
					<i id="icon" class="fa-brands fa-github text-4xl" />
				</a>
			</div>
			<div class="h5">Cameron Courtney © 2023</div>
		</div>
	</svelte:fragment>
</AppShell>

<style>
	/* Formats the buttons/sections of the site as a flex-box. */
	#navContainer {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 1rem;
		position: sticky;
		top: 0;
		padding: 1rem;
		height: max-content;
		/* font-size: 1rem; */
	}

	#header {
		cursor: pointer;
	}

	#iconContainer {
		display: flex;
		flex-direction: row;
		gap: 1.5rem;
		justify-content: center;
		align-items: center;
	}

	#icon {
		cursor: pointer;
	}

	#footer {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 1rem;
		gap: 0.5rem;
		background-color: var(--color-primary-500);
	}
</style>
