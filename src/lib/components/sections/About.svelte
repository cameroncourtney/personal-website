<script lang="ts">
    import LonghornGif from "../LonghornGif.svelte";
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
            <p class="cardSentence">
                I am a graduate of the
                <span class="underline" id="longhorn">
                    <LonghornGif></LonghornGif>
                </span>with a degree in Computer Science and 
                a Certificate in Applied Statisical Modeling. 
            </p>
            <p>
                I have experience in full-stack, web, and mobile development. I also have taken several courses in the field of Data Science.
            </p>
            <p>
                My interests in the field include Software Engineering, Web Development, and Machine Learning.
            </p>
        </div>
    </div>
</div>


<style>
    #aboutSection {
		/* Height is viewport minus height of the header and footer. 
		Header is 56px, footer is 104px. */
        height: inherit;
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
        box-sizing: border-box;
        gap: 2rem;
        padding: 2rem;
        overflow: auto;
        margin: 4rem;
        min-height: 50%;
	}

    #cardHeader {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;
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