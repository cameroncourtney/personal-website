<script>
	import Links from "./Links.svelte";

</script>

<!-- Footer component that links LinkedIn, Github, and my email. Also contains name at bottom. -->
<div id="footer" class="w-full">
	<div id="iconContainer">
		<Links></Links>
	</div>
	<div class="h-5">Cameron Courtney © 2023</div>
</div>

<style>
	#iconContainer {
		display: flex;
		flex-direction: row;
		gap: 2rem;
		justify-content: center;
		align-items: center;
	}
	#footer {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 1rem;
		gap: 0.5rem;
	}
</style>
