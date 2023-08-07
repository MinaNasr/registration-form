# RegistrationForm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve --proxy-config scr/proxy.conf.json` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## More Information

#### 1 - Describe possible optimizations for your code:

- we could have used state management system libraries like ngrx for managing the state of the app and saving the current step that we are in along with dispatching the submit action

#### 2 - Things that could be done better:

- Make the steps as standalone pages where we navigate through them using angular routing and also the success message would be a standalone page not a modal. But I wasn't sure about which approach was desired and I chose to go with the presented approach

#### 3 - Used technologies:

- Angular 13
- Typescript
- Angular Material UI

#### 4 - Problems I faced:

- CORS error trying to access the API , And I solved it by using a proxy configuration file in my client side angular app
- Being not sure if the success page can be a modal or not and what data should be presented in it.

#### 5 - Project structure:

- components: containes two components `RegistrationFormComponent` and `SuccessMessageComponent`.
- interfaces: containes `registration.interface.ts` file.
- services: containes `registration.service.ts`  and `registration.service.spec.ts`files.



