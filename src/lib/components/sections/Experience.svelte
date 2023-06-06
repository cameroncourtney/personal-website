<script lang="ts">
	import LonghornGif from '../LonghornGif.svelte';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>

<div id="expSection">
	<div id="expCard" class="card p-8">
		<div id="cardHeader">
			<div class="text-5xl">Experience</div>
			<hr id="divider" class="!border-t-4" />
		</div>
		<div id="cardContent" class="text-xl">
            <div>
                <p class="text-3xl">
                    <a href="https://en.wikipedia.org/wiki/H-E-B">
                        H-E-B
                    </a>
                </p>
                <hr id="divider" class="!border-t-4" />
            </div>
            <div id="list">
                <p class="text-2xl italic">
                    Software Engineer Intern (August 2022 - Present)
                </p>
                <ul class="indent-2">
                    <li class="flex justify-start items-start">
                        <span class="h-fit"><i class="fa-solid fa-circle fa-2xs"></i></span>
                        <span>
                            Independently constructed a business-facing frontend SvelteKit web application that streamlined the workflow
                            for managing advertisements in H-E-B’s Pharmacy database
                        </span>
                    </li>
                    <li class="flex justify-start items-start">
                        <span class="h-fit"><i class="fa-solid fa-circle fa-2xs"></i></span>
                        <span>
                            Communicated with full-time engineers to refine the UX/UI of the project, incorporating feedback from
                            stakeholders to ensure an intuitive application
                        </span>
                    </li>
                    <li class="flex justify-start items-start">
                        <span class="h-fit"><i class="fa-solid fa-circle fa-2xs"></i></span>
                        <span>
                            Expanded the functionality of the existing backend advertisement API to support the needs of the new SvelteKit frontend.
                        </span>
                    </li>
                </ul>
            </div>
            <div id="list">
                <p class="text-2xl italic">
                    Software Engineer Intern (Summer 2022)
                </p>
                <ul class="indent-2">
                    <li class="flex justify-start items-start">
                        <span class="h-fit"><i class="fa-solid fa-circle fa-2xs"></i></span>
                        <span>
                            Collaborated with two other interns to create a customer-facing progressive web application that pulls
                            advertisements hosted on Google Cloud and displays them on screens featured in H-E-B Pharmacies
                        </span>
                    </li>
                    <li class="flex justify-start items-start">
                        <span class="h-fit"><i class="fa-solid fa-circle fa-2xs"></i></span>
                        <span>
                            Designed several REST API endpoints that interact with H-E-B’s advertisement 
                            database and Google Cloud Storage Bucket so that images could seamlessly be pulled 
                            to the frontend application
                        </span>
                    </li>
                    <li class="flex justify-start items-start">
                        <span class="h-fit"><i class="fa-solid fa-circle fa-2xs"></i></span>
                        <span>
                            Produced a minimum viable product to be displayed in H-E-B Pharmacies located throughout Texas
                        </span>
                    </li>
                </ul>
            </div>
		</div>
	</div>
</div>

<style>
	#expSection {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
	}

	#expCard {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		padding: 2rem;
		overflow: auto;
		margin: 1.5rem;
		width: 80%;
	}

    #list {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        justify-content: flex-start;
        align-items: flex-start;
    }

	#cardHeader {
		display: flex;
		flex-direction: column;
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
        gap: 1rem;
	}

	#divider {
		width: 100%;
	}
</style>
