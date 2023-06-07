<script lang="ts">
	import LonghornGif from '../LonghornGif.svelte';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>

	<div id="test">
		<div id="testing">hello</div>
		<div class="card p-4">
			<div id="cardHeader">
				<div class="text-5xl">Education</div>
				<hr id="divider" class="!border-t-4" />
			</div>
			<div id="cardContent" class="text-xl">
				<div id="schoolInfo">
					<p>
						<span class="hover:underline cursor-pointer" id="longhorn">
							<LonghornGif />
						</span>
					</p>
					<p class="italic">Bachelor of Science and Arts, Computer Science</p>
					<p class="italic hover:underline">
						<a href="https://stat.utexas.edu/academics/certificate-applied-statistical-modeling">
							Certificate in Applied Statistical Modeling
						</a>
					</p>
				</div>
				<div id="courses">
					<p class="text-3xl">Relevant Coursework</p>
					<div class="flex flex-row justify-center text-left">
						<Accordion>
							<AccordionItem>
								<svelte:fragment slot="summary">CS 312: Intro to Programming</svelte:fragment>
								<svelte:fragment slot="content">
									<p class="text-sm">
										Fundamental programming concepts (in Java), basic data structures, reasoning and
										debugging of programming behavior
									</p>
								</svelte:fragment>
							</AccordionItem>
							<AccordionItem>
								<svelte:fragment slot="summary">CS 314: Data Structures</svelte:fragment>
								<svelte:fragment slot="content">
									<p class="text-sm">
										Unit Testing, building and using data stuctures, Algorithm Analysis
									</p>
								</svelte:fragment>
							</AccordionItem>
							<AccordionItem>
								<svelte:fragment slot="summary">CS 311: Discrete Mathematics</svelte:fragment>
								<svelte:fragment slot="content">
									<p class="text-sm">
										Logical Notation, Mathematical Induction, Graph Theory, Recurrences, Set Theory,
										and Programming Correctness
									</p>
								</svelte:fragment>
							</AccordionItem>
							<AccordionItem>
								<svelte:fragment slot="summary"
									>CS 429: Computer Organization and Architecture</svelte:fragment
								>
								<svelte:fragment slot="content">
									<p class="text-sm">
										Programming in C, representing data and programs at a low level of abstraction,
										Memory Management, Storage Architecture, Processor Architecture
									</p>
								</svelte:fragment>
							</AccordionItem>
							<AccordionItem>
								<svelte:fragment slot="summary">CS 439: Principles of Computer Systems</svelte:fragment>
								<svelte:fragment slot="content">
									<p class="text-sm">
										Multi-Threading, Virtual Memory, File Systems, Networking, Parallel and
										Distributed Computing
									</p>
								</svelte:fragment>
							</AccordionItem>
							<AccordionItem>
								<svelte:fragment slot="summary">CS 331: Algorithms and Complexity</svelte:fragment>
								<svelte:fragment slot="content">
									<p class="text-sm">
										Proof by Induction, Graph Theory, Greedy Algorithms, Divide and Conquer Algorithms,
										NP Completeness, Approximation Algorithms
									</p>
								</svelte:fragment>
							</AccordionItem>
						</Accordion>
						<Accordion>
							<AccordionItem>
								<svelte:fragment slot="summary">CS 371P: Object Oriented Programming</svelte:fragment>
								<svelte:fragment slot="content">
									<p class="text-sm">
										Basic OOP Principles (Inheritance, Polymorphism, etc.), Programming in C++,
										Writing Unit Tests
									</p>
								</svelte:fragment>
							</AccordionItem>
							<AccordionItem>
								<svelte:fragment slot="summary">CS 363D: Intro to Data Mining</svelte:fragment>
								<svelte:fragment slot="content">
									<p class="text-sm">
										Cleaning Data, Feature Engineering, Classification Models (Decision Trees,
										K-Nearest Neighbors, Naive Byes, SVMs, Neural Networks), Clustering Algorithms,
										Association Analyis, Basic Data Science Tools and Libraries (Jupyter Notebooks,
										pandas, scikit-learn, etc.)
									</p>
								</svelte:fragment>
							</AccordionItem>
							<AccordionItem>
								<svelte:fragment slot="summary">CS 343: Artificial Intelligence</svelte:fragment>
								<svelte:fragment slot="content">
									<p class="text-sm">
										Introduction to AI, Probabilistic Reasoning, Machine Learning, Reinforcement
										Learning, Bayes Nets, Constraint Satisfaction Problems
									</p>
								</svelte:fragment>
							</AccordionItem>
							<AccordionItem>
								<svelte:fragment slot="summary">CS 378: Safe and Ethical AI</svelte:fragment>
								<svelte:fragment slot="content">
									<p class="text-sm">
										Evaluating and mitigating the issues of fairness, security/privacy, and
										interpretability of ML Models through the use of various statistical techniques
									</p>
								</svelte:fragment>
							</AccordionItem>
							<AccordionItem>
								<svelte:fragment slot="summary">CS 371M: Mobile Computing</svelte:fragment>
								<svelte:fragment slot="content">
									<p class="text-sm">
										Mobile Application Development (Android), Kotlin, Android Studios, HTTP/REST
										Principles
									</p>
								</svelte:fragment>
							</AccordionItem>
							<AccordionItem>
								<svelte:fragment slot="summary">CS 347: Database Management</svelte:fragment>
								<svelte:fragment slot="content">
									<p class="text-sm">
										SQL, Relational Databases (PostgreSQL), Database Design and Normalizaion, NoSQL
										Databases (Graph Databases (Neo4j), Document Databases (MongoDB), Column
										Databases, Key-Value Databases), Database Management
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
	#aboutSection {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		margin: 10rem;
		box-sizing: border-box;
	}

	#aboutCard {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	#test {
		display: flex;
		flex-direction: column;
		background-color: red;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		justify-content: center;
		/* margin: 10rem;
		margin-bottom: 10rem; */
	}

	#testing {
		background-color: blue;
		display: flex;
		width: 100%;
		justify-content: center;
	}

	#schoolInfo,
	#courses {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
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
		align-items: center;
		width: 100%;
		padding-left: 2rem;
		padding-right: 2rem;
		gap: 2rem;
	}

	#divider {
		width: 100%;
	}
</style>
