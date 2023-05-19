<!-- Footer component that links LinkedIn, Github, and my email. Also contains name at bottom. -->
<div id="footer">
	<div id="iconContainer">
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
	<div class="h5">Cameron Courtney © 2023</div>
</div>

<style>
	#iconContainer {
		display: flex;
		flex-direction: row;
		gap: 2rem;
		justify-content: center;
		align-items: center;
	}

	#github,
	#email,
	#linkedIn {
		cursor: pointer;
	}

	#footer {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 1rem;
		gap: 0.5rem;
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
