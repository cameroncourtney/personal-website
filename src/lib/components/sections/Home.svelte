<script lang="ts">
	import Links from "$lib/components/Links.svelte";
	import Footer from "$lib/components/Footer.svelte";
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
            <a href="../CameronCourtneyResume.pdf" type="button" class="btn variant-soft-surface text-xl">
                <span><i class="fa-solid fa-user"></i></span>
                <span>Resume</span>
            </a>
        </div>
    </section>
</div>
<Footer links={false}></Footer>

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
		height: 100%;
		width: 100%;
        box-sizing: border-box;
		display: flex;
        flex-flow: column wrap;
		justify-content: center;
		align-items: center;
	}

    #footer {
        position: absolute;
        bottom: 0;
    }
</style>