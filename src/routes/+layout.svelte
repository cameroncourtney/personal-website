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
</script>

<AppShell>
	<AppBar id="shell" gap="gap-8">
		<svelte:fragment slot="lead">
			<div />
		</svelte:fragment>
		<svelte:fragment>
			<!-- Header Contents -->
			<div id="headerContainer">
				<button type="button" class="btn !bg-transparent">
					<h1 class="h3" id="header">About</h1>
				</button>
				<button type="button" class="btn !bg-transparent">
					<h1 class="h3" id="header">Experience</h1>
				</button>
				<button type="button" class="btn !bg-transparent">
					<h1 class="h3" id="header">Projects</h1>
				</button>
				<button type="button" class="btn !bg-transparent">
					<h1 class="h3" id="header">Contact</h1>
				</button>
			</div>
		</svelte:fragment>
		<svelte:fragment slot="trail"
			><LightSwitch class="white" width="w-14" height="h-7" /></svelte:fragment
		>
	</AppBar>
	<slot />
</AppShell>

<style>
	#headerContainer {
		display: flex;
		flex-direction: row;
		justify-content: center;
		font-size: 1rem;
	}
</style>
