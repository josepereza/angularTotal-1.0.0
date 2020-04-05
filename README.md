# Materialize

![imagen](scrollspy2.png)

## ngx-page-scroll
* https://www.npmjs.com/package/ngx-page-scroll
* https://github.com/Nolanus/ngx-page-scroll
## animate-on-scroll
* https://github.com/abhazelton/animate-on-scroll
* https://www.npmjs.com/package/ng2-animate-on-scroll
## animate.css
* https://github.com/daneden/animate.css

### Installation
Install via npm:
...
$ npm install animate.css --save
or yarn:
...
$ yarn add animate.css
...
### Usage
To use animate.css in your website, simply drop the stylesheet into your document's <head>, and add the class animated to an element, along with any of the animation names. That's it! You've got a CSS animated element. Super!


## flex-layout (esta opcion tenemos que instalarla)
* https://github.com/angular/flex-layout
 ### Getting Started
Start by installing the Angular Layout library from npm
```
 npm i -s @angular/flex-layout @angular/cdk
```
Next, you'll need to import the Layout module in your app's module.

app.module.ts
```
import { FlexLayoutModule } from '@angular/flex-layout';
...

@NgModule({
    ...
    imports: [ FlexLayoutModule ],
    ...
});
```
After that is configured, you can use the Angular Layout attributes in your HTML tags for flex layout:
```
<div fxLayout="row" fxLayoutAlign="space-between">
</div>
```
Check out all of the available options for using Angular Layout in your application.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
