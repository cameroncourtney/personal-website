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
	import Header from '../lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';


	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
			
			
	function sectionScroll(section: string) {
		const ref = document.getElementById(section);
		console.log(ref);
		ref?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<!-- Main wrapper component around application -->
<AppShell class="scroll-smooth" regionPage="overflow-y-auto" slotFooter="bg-black p-4">
	<!-- Header Contents -->
	<svelte:fragment slot="header">
		<Header/>
	</svelte:fragment>

	<slot/>
	<!-- <a href="../CameronCourtneyResume.pdf" target="_blank" class="pdf-button">
		Open PDF
	</a> -->
	<!-- Footer Contents -->
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>


<style>

</style>