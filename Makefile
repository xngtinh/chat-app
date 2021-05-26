.PHONY: build run component service interface guard test lint tailwind

build:
	ng build

run:
	ng serve

component:
ifeq ("$(name)", "")
	ng generate component
else
	ng generate component components/$(name)
endif

service:
ifeq ("$(name)", "")
	ng generate service
else
	ng generate service services/$(name)
endif

interface:
ifeq ("$(name)", "")
	ng generate interface
else
	ng generate interface models/$(name)
endif

guard:
ifeq ("$(name)", "")
	ng generate guard
else
	ng generate guard helpers/$(name)
endif

test:
	ng test

lint:
	ng lint

tailwind:
	npx tailwindcss build src/styles.css -o src/output.css
