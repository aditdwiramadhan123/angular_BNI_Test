# Maverick Back Office Host

This application implements the shell of micro frontend with module federation for BNI back office web application

## Tools for Development

- Node
- Angular CLI
- Visual Studio Code
- Visual Studio Extensions
  - ESLint
  - Sonarlint
  - Prettier (_optional_)
  - GitLens (_optional_)

## Code Guideline

- Avoid using type `any`
- Use **Reactive Form** instead of **Template Driven Form**
- Put id for all possible component for automation purpose
- Indent the code using double spaces
- DRY (do not repeate yourself) as much as possible
- Write unit test for all possible **components**, **pipes**, **directives**, **utlis**
- Use **camelCase** for variables
- Use **SCSS** file for styling
- Fix all **SonarLint**, **ESLint** and **Unit Test** issues before raising merge request
  run commands to run eslint and unit test as defined on the **Commands** section
- Use **Angular Material** for components and **Bootstrap** for grid and responsive design

## Folder Structure

- Put all text displayed on the HTML on `src/assets/i18n/id.json` and `src/assets/i18n/en.json` and use ngx-translate pipe
- Put arbitrary number or parameter on `src/app/core/constants` folder, eq: Regex, Min and Max validation
- Update all manifests json file in `src/assets/mf-manifests` folder according to their environment deployment to add remote microfontend and
- For mapping with route update the `src/app/app-routing.module.ts` file
- Data or variables that differ for each environment should be put inside environment files in `src/environments` folder
- Request `.npmrc` file to install Maverick's Back Office private Angular library and put the file on the root folder of the application

## Steps to Run The Application

- Clone/Pull the micro frontend we want to test locally 
- Run `npm install` command on micro frontend root directory
- Run `ng serve --open` command on micro frontend root directory to run the micro frontend and open the url in default browser
- The micro frontend can run independently, however if we want to test on the host app directly:
    - Clone/Pull the host
    - Make sure the micro frontend serve URL is correctly mapped on the `src/assets/mf-manifests/mf.manifest.json`, for the other micro frontend ignore the url in the `mf.manifest.json` or refer to the development deployment URL as needed
    - Run `ng serve --open` command on the host root directory to run the host and open the url in default browser

## Commands

| Command | Description |
| ------ | ------ |
| `npm install` | To install the dependency packages |
| `ng generate component|directive|pipe|service|class|guard|interface|enum|module` | To generate component/ directive/ pipe / service, etc |
| `ng lint` | To run ESLint checking |
| `ng test` | To execute the unit tests via [Karma](https://karma-runner.github.io) |
| `ng serve` | To run the application locally and will read from `environment.ts` and `mf.manifest.json` |
| `ng serve --configuration development` | To run the application locally and will read from `environment.dev.ts` and `mf.manifest.dev.json` |
| `ng serve --configuration sit` | To run the application locally and will read from `environment.sit.ts` and `mf.manifest.sit.json` |
| `ng serve --configuration uat` | To run the application locally and will read from `environment.uat.ts` and `mf.manifest.uat.json` |
| `ng serve --configuration production` | To run the application locally and will read from `environment.prod.ts` and `mf.manifest.prod.json` |
| `ng build --configuration development` | To build the application and will read from `environment.dev.ts` and `mf.manifest.dev.json` |
| `ng build --configuration sit` | To build the application and will read from `environment.sit.ts` and `mf.manifest.sit.json` |
| `ng build --configuration uat` | To build the application and will read from `environment.uat.ts` and `mf.manifest.uat.json` |
| `ng build --configuration production` |To build the application and will read from `environment.prod.ts` and `mf.manifest.prod.json` |