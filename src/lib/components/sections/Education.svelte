<script lang="ts">
	import Footer from "../Footer.svelte";
    import LonghornGif from "../LonghornGif.svelte";
</script>

<div id="aboutSection">
    <div id="aboutCard" class="card p-8">
        <div id="cardHeader">
            <div class="text-5xl">
                Education
            </div>
            <hr id="divider" class="!border-t-4" />
        </div>
        <div id="cardContent" class="text-2xl">
            <p class="cardSentence">
                <span class="underline" id="longhorn">
                    <LonghornGif></LonghornGif>
                </span> 
            </p>
            <p class="italic">
               Bachelor of Science and Arts, Computer Science
            </p>
            <p class="italic">
                <a href="https://stat.utexas.edu/academics/certificate-applied-statistical-modeling">
                    Certificate in Applied Statistical Modeling
                </a>
             </p>
            <p>
                My interests in the field include Software Engineering, Web Development, and Machine Learning.
            </p>
        </div>
    </div>
</div>
<Footer links={true}></Footer>


<style>
    #aboutSection {
		/* Height is viewport minus height of the header and footer. 
		Header is 56px, footer is 104px. */
        height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
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
        margin: 2rem;
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
        align-items: flex-start;
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