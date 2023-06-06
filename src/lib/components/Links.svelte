<!-- Links to Github, LinkedIn, and email. -->
<div id="linkContainer">
	<a href="https://linkedin.com/in/cameron-courtney">
		<i id="linkedIn" class="fa-brands fa-linkedin text-4xl" />
	</a>
	<a href="mailto: cameroncourtney@utexas.edu">
		<i id="email" class="fa-regular fa-envelope text-4xl" />
	</a>
	<a href="https://github.com/cameroncourtney">
		<i id="github" class="fa-brands fa-github text-4xl" />
	</a>
</div>

<style>
	#linkContainer {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 1.25rem;
	}

	#github,
	#email,
	#linkedIn {
		cursor: pointer;
	}

	#linkedIn:hover {
		color: rgb(var(--color-primary-500));
	}

	#email:hover {
		color: rgb(var(--color-secondary-500));
	}

	#github:hover {
		color: rgb(var(--color-tertiary-500));
	}
</style>
