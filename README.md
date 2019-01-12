# SpSwapiPlanets

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Project was developed basing on following task description:

# List of Planets

Write an application that presents a list of planets. Data should be requested from an
external server. Use this service - https://swapi.co/api/planets/. You may choose in what way
you wish to present the list, as long as it is pleasing to the user’s eye.

The application should have a search bar located at the top of the list. A user should be able
to type a string phrase into the search input and the planet list should be filtered by their
names.

The list presented should also contain pagination with an option to navigate to different
pages in addition to another option in order to  select the page size (possible values should
be 5, 10, 25, 100).

A user should also have an option to view the details of their selected planet. Clicking on a
planet should navigate the user to a page where the details of the planet are presented. At
the top of that page should be a ‘back’ button that navigates back to the list. Navigation
should be possible by changing only the URL.

Prepare your own design for the application, not forgetting to make it as user friendly as
possible.

In case of problems, prepare a JSON file populated with mock/dummy data.

Technical requirements:
1. HTML5, CSS (SASS or LESS)
2. Angular ver. 5 & Typescript
3. You may use any angular library like material, ngrx, rxjs
4. Npm, yarn
5. Webpack / Bazel / Rollup / SystemJs for building application
6. Application should run

Verification criteria:
● HTML/CSS code quality
● Typescript & Angular - code quality
● Validity and esthetic aspect of requesting/querying the data.
● Browser compatibility (Chrome, FF, IE11)
● Performance (initial load time, number of requests)
