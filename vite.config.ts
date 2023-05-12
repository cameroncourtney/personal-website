import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			// Allow items from these directories to be served.
			allow: ['src/**', 'static/**']
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
