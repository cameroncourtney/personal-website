<script lang="ts">
	import Gif from "../Gif.svelte";
</script>

<div id="aboutSection">
    <div id="aboutCard" class="card p-8">
        <div id="cardHeader">
            <div class="text-5xl">
                About
            </div>
            <hr id="divider" class="!border-t-4" />
        </div>
        <div id="cardContent" class="text-2xl">
            <p>
                I recently graduated from the 
                <span class="underline" id="longhorn">
                    <Gif></Gif>
                </span>
                with a degree in Computer Science and 
                a Certificate in Applied Statisical Modeling. 
            </p>
            <p>
                I have experience in full-stack development, web and mobile development, and data science.
            </p>
            <p>
                My interests in the field include Software Engineering, Web Development, and Machine Learning.
            </p>
            <p>
                I am currently a Software Engineer at H-E-B.
            </p>
        </div>
    </div>
</div>


<style>
    #aboutSection {
		/* Height is viewport minus height of the header and footer. 
		Header is 56px, footer is 104px. */
		min-height: calc(100vh - 56px);
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}

    #aboutCard {
		display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 75%;
        gap: 1rem;
	}

    #cardHeader {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        gap: 0.5rem;
    }

    #cardContent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding-left: 2rem;
        padding-right: 2rem;
        gap: 2rem;
    }

    #divider {
        width: 30%;
    }   
    
    #longhorn {
        cursor: pointer;
    }
</style>