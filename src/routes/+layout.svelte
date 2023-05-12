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
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<AppBar gap="gap-8" slotDefault="place-content-end" slotTrail="place-content-end">
		<svelte:fragment slot="lead">
			(icon)
			<!-- <img src="/favicon.png" alt="logo"/> -->
		</svelte:fragment>
		<div id="headers">
			<div>About</div>
			<div>Experience</div>
			<div>Projects</div>
			<div>Contact</div>
		</div>
		<svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
	</AppBar>
	<slot />
</AppShell>

<style>
	#headers {
		display: flex;
		flex-direction: row;
		gap: 10%;
		justify-content: center;
	}
</style>
