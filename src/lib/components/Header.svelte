<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<!-- 
<div class="app-bar flex flex-col bg-surface-100-800-token  space-y-4 p-4  " data-testid="app-bar" role="toolbar" aria-label="" aria-labelledby=""><div class="app-bar-row-main grid items-center grid-cols-[auto_1fr_auto] gap-4 "> <div class="app-bar-slot-default flex-auto "></div> </div> </div> -->

<!-- <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"> -->
<nav class="w-full bg-surface-200-800-token shadow-md">
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<LightSwitch />
		<div class="flex md:order-2">
			<a href="/" class="flex items-center">
				<!-- <img src="/favicon.png" class="h-8 mr-3" alt="Website Logo"> -->
				<!-- <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Cameron Courtney</span> -->
			</a>
			<!-- <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button> -->
			<button
				data-collapse-toggle="navbar-sticky"
				type="button"
				class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="navbar-sticky"
				aria-expanded="false"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="w-6 h-6"
					aria-hidden="true"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"
					/></svg
				>
			</button>
		</div>
		<div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
			<ul
				class="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0"
			>
				<!-- <li>
			<a href="#" class="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
		</li> -->
				<li>
					<a
						href="/"
						class=" block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-300 md:hover:bg-transparent md:hover:text-secondary-500 md:p-0 md:dark:hover:text-primary-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
						>Home</a
					>
				</li>

				<li>
					<a
						href="/Education"
						class="scroll-smooth block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-300 md:hover:bg-transparent md:hover:text-secondary-500 md:p-0 md:dark:hover:text-secondary-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
						>Education</a
					>
				</li>
				<li>
					<a
						href="/Experience"
						class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-tertiary-500 md:p-0 md:dark:hover:text-tertiary-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
						>Experience</a
					>
				</li>
				<li>
					<a
						href="/Projects"
						class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary-500 md:p-0 md:dark:hover:text-secondary-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
						>Projects</a
					>
				</li>
				<li>
					<a
						href="/Contact"
						class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-500 md:p-0 md:dark:hover:text-primary-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
						>Contact</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>
