# au-crud-app

This README outlines the details of collaborating on this Ember application.

## Prerequisites

* [Node.js](https://nodejs.org/) v.14.17.3
* [Ember CLI](https://cli.emberjs.com/release/) v.4.4.0
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd au-crud-app`
* `npm install`

## Install, and configure appuniversum

1. `ember install ember-cli-sass` - installs node-sass in the project (required by AU)
2. `ember install ember-data-table` - an add-on used together with appuniversum
3. `ember install @appuniversum/ember-appuniversum`
4. `ember install ember-cli-autoprefixer` - a dependency required by AU
5. `ember install ember-hash-helper-polyfill`
6. Change `style.css` to `style.scss`, and configure the folder structure for SCSS partials
7. Add the following lines to your `ember-cli-build.js` file

```javascript

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
+   autoprefixer: {
+     cascade: false,
+   },
+   sassOptions: {
+     sourceMap: true,
+     extension: 'scss',
+     includePaths: ['node_modules/@appuniversum/appuniversum'],
+   },
  });

  return app.toTree()

```

Create EDT adapter in the app
Also add it in the route - import EDT mixin, and extend the route with EDT mixin

```javascript

import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';

export default class AuthorRoute extends Route.extend(DataTableRouteMixin) {
  modelName = 'author';}

```
