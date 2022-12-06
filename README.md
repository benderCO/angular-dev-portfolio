# Angular Dev Portfolio

Angular Development Portfoliio

This repo contains an easy-to-customize personal development portfolio built entirely in Angular. 

GitHub Pages accept two different folder methods:

* Root
* Docs

We can use the Root method for simple HTML, CSS, and JavaScript files since GitHub Pages start looking for such files in the root directory.

We can use the Docs method in cases where we must build an app. This helps in hosting only the final output of the app, instead of hosting a complete app. GitHub Pages start looking for such files in the docs directory.

In this case, since we are creating an Angular application we update the angular.json output folder to docs allowing us to host your own full angular application.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).