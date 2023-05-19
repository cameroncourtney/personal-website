# Start the application and open it in a new browser
start:
	npm run dev -- --open

# Run lint
lint:
	npm run lint

# Run prettier
lint-fix:
	npm run format

# Production build of application
build:
	npm run build

# Preview production build
preview:
	npm run preview

# Run application and expost host.
start-host:
	npm run dev -- --host
