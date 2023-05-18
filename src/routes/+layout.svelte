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
		ref?.scrollIntoView({behavior: 'smooth'});
	}
</script>

<!-- Main wrapper component around application -->
<AppShell>
	<AppBar gap="gap-8" class="sticky top-0">
		<svelte:fragment slot="lead">
			<div />
		</svelte:fragment>
		<svelte:fragment>
			<!-- Header Contents -->
			<div id="navContainer">
				<button type="button" class="btn !bg-transparent" on:click={() => sectionScroll("about")} >
					<h1 class="h3" id="header">About</h1>
				</button>
				<button type="button" class="btn !bg-transparent" on:click={() => sectionScroll("experience")}>
					<h1 class="h3" id="header">Experience</h1>
				</button>
				<button type="button" class="btn !bg-transparent" on:click={() => sectionScroll("projects")} >
					<h1 class="h3" id="header">Projects</h1>
				</button>
				<button type="button" class="btn !bg-transparent" on:click={() => sectionScroll("contact")}>
					<h1 class="h3" id="header">Contact</h1>
				</button>
			</div>
		</svelte:fragment>
		<svelte:fragment slot="trail">
			<LightSwitch class="white" width="w-14" height="h-7" />
		</svelte:fragment>
	</AppBar>
	<slot />
</AppShell>

<style>
	/* Formats the buttons/sections of the site as a flex-box. */
	#navContainer {
		display: flex;
		flex-direction: row;
		justify-content: center;
		font-size: 1rem;
	}
</style>
