<script lang="ts">
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
					<a href="https://en.wikipedia.org/wiki/H-E-B"> H-E-B </a>
				</p>
				<hr id="divider" class="!border-t-4" />
			</div>
			<div id="list">
				<p class="text-2xl italic">
					Software Engineer Intern
					<span class="text-xl">(Summer 2022)</span>
				</p>
				<div class="flex flex-row justify-start align-start w-full">
					<Accordion>
						<AccordionItem>
							<svelte:fragment slot="lead"><i class="fa-solid fa-pencil" /></svelte:fragment>
							<svelte:fragment slot="summary">Project Description</svelte:fragment>
							<svelte:fragment slot="content">
								<p class="text-base text-left">
									Collaborated with two other interns to create a customer-facing progressive web
									application that pulls advertisements hosted on Google Cloud and displays them on
									screens featured in H-E-B Pharmacies
								</p>
								<p class="text-base text-left">
									Designed several REST API endpoints that interact with H-E-B’s advertisement
									database and Google Cloud Storage Bucket so that images could easily be pulled to
									the frontend application
								</p>
							</svelte:fragment>
						</AccordionItem>
						<AccordionItem>
							<svelte:fragment slot="lead"
								><i class="fa-solid fa-screwdriver-wrench" /></svelte:fragment
							>
							<svelte:fragment slot="summary">Tools and Technologies</svelte:fragment>
							<svelte:fragment slot="content">
								<p class="text-base text-left">
									Angular, SpringBoot, Google Cloud, Jest, JUnit, TypeScript, HTML, CSS
								</p>
							</svelte:fragment>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
			<div id="list">
				<p class="text-2xl italic">
					Software Engineer Intern
					<span class="text-xl">(August 2022 - Present)</span>
				</p>
				<div class="flex flex-row justify-start align-start w-full">
					<Accordion>
						<AccordionItem>
							<svelte:fragment slot="lead"><i class="fa-solid fa-pencil" /></svelte:fragment>
							<svelte:fragment slot="summary">Project Description</svelte:fragment>
							<svelte:fragment slot="content">
								<p class="text-base text-left">
									Independently constructed a business-facing frontend SvelteKit web application
									that streamlined the workflow for managing advertisements in H-E-B’s Pharmacy
									database
								</p>
								<p class="text-base text-left">
									Expanded the functionality of the existing advertisement API to support the needs
									of the new SvelteKit frontend
								</p>
							</svelte:fragment>
						</AccordionItem>
						<AccordionItem>
							<svelte:fragment slot="lead"
								><i class="fa-solid fa-screwdriver-wrench" /></svelte:fragment
							>
							<svelte:fragment slot="summary">Tools and Technologies</svelte:fragment>
							<svelte:fragment slot="content">
								<p class="text-base text-left">
									SvelteKit, SpringBoot, Google Cloud, Vitest, JUnit, TypeScript, HTML, CSS
								</p>
							</svelte:fragment>
						</AccordionItem>
					</Accordion>
				</div>
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
		justify-content: flex-start;
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
		justify-content: flex-start;
		align-items: flex-start;
		width: 100%;
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
