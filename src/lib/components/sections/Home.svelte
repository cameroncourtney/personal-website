<script lang="ts">
	import Links from "$lib/components/Links.svelte";
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
    
    /**
     * Emit an event when the about button is clicked.
     */
    function aboutClick() {
        console.log("hello clicked");
        dispatch('aboutScroll');
    }
</script>

<div id="homeSection">
    <!-- Main container with name, links, etc. -->
    <section id="introContainer">
        <div id="intro">
            <div class="text-6xl">
                Cameron Courtney
            </div>
            <div class="text-3xl">
                Software Engineer
            </div>
            <Links></Links>
        </div>
    </section>

    <!-- Footer to navigate to about page below. -->
    <div id="aboutButton">
        <div class="text-2xl font-medium">About Me</div>
        <button on:click={aboutClick} type="button" class="btn-icon btn-lg variant-filled text-2xl">
            <i class="fa-solid fa-arrow-down"></i>
        </button>
    </div>
</div>

<style>
	#intro {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		min-height: 90%
	}

    #introContainer {
		/* Height is viewport minus height of the header and footer. 
		Header is 56px, footer is 104px. */
		min-height: calc(100vh - 56px - 147px);
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}

    #aboutButton {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 2rem;
		gap: .5rem;
        width: 100%;
	}
</style>