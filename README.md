# Angula9PrimeirosPassos

## Json server

Run `json-server --watch db.json` for start the json server in the folder assets, where the file is saved. You can see the data inside that file navigating to `http://localhost:3000/Employee`, then the content will be shown in the browser's page.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## ngx-toastr

[Toastr](https://github.com/scttcper/ngx-toastr) is a component for showing messages for operations according personal implementation. It was installed ngx-toastr by the command in CLI `npm i ngx-toastr -s` and applied to employee stack to test this functionality that was seen in the tutorial from Angular With Malik, [7 Part 4 Angular6, Json-Server - CRUD](https://www.youtube.com/watch?v=m9TjjOeiiBg&list=PL7Kiip3en_dz5BXCyZa0hMSqJEtQGmBWn&index=4). It is necessary to import it in style.scss to make it available for the whole application, also in the app.modules importing ToastModule, then after add to employee.components.

## ngx-spinner

[Spinner](https://www.npmjs.com/package/ngx-spinner) is a  library with more than 50 different loading spinners for Angular. It was installed ngx-spinner by the command in CLI `npm i ngx-spinner -s` and also applied to employee stack and it was seen also in the tutorial from Angular With Malik, [7 Part 4 Angular6, Json-Server - CRUD](https://www.youtube.com/watch?v=m9TjjOeiiBg&list=PL7Kiip3en_dz5BXCyZa0hMSqJEtQGmBWn&index=4). It is necessary to import in app.module and inside the app.component.html a tag of this component `<ngx-spinner></ngx-spinner>`. Inside the service from the component to be used is needed to import, add to the constructor as parameter and then put within of method(s) chosen.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
