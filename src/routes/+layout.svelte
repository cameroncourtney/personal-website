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
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
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
	<svelte:fragment slot="pageHeader">
		<Header />
	</svelte:fragment>
	<!-- <slot /> -->
	<!-- Footer Contents -->
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>

<style>
	/* Formats the buttons/sections of the site as a flex-box. */
	/* #navContainer {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		position: sticky;
		top: 0;
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
	}

	#headContainer {
		display: flex;
	}

	#header {
		cursor: pointer;
		display: flex;
		padding-left: 1rem;
		padding-right: 1rem;
	} */
</style>
