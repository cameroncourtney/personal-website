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
    <div id="aboutButton">
        <div class="text-2xl">
            About Me
        </div>
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
		/* Height is viewport minus height of the header and footer. 
		Header is 56px, footer is 104px. */
		height: 100%;
		width: 100%;
        box-sizing: border-box;
		display: flex;
        flex-flow: column wrap;
		justify-content: center;
		align-items: center;
	}

    #aboutButton {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 2rem;
		gap: .5rem;
        width: 100%;
        box-sizing: border-box;
	}
</style>