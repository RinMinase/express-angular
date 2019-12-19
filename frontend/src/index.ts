/***************************************************************************************************
 * BROWSER POLYFILLS
 *
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es/symbol';
// import 'core-js/es/object';
// import 'core-js/es/function';
// import 'core-js/es/parse-int';
// import 'core-js/es/parse-float';
// import 'core-js/es/number';
// import 'core-js/es/math';
// import 'core-js/es/string';
// import 'core-js/es/date';
// import 'core-js/es/array';
// import 'core-js/es/regexp';
// import 'core-js/es/map';
// import 'core-js/es/weak-map';
// import 'core-js/es/weak-set';
// import 'core-js/es/set';

/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.

/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es/reflect';
// import 'core-js/proposals/reflect-metadata';

/***************************************************************************************************
 * APPLICATION IMPORTS
 */

import 'zone.js/dist/zone';  // Included with Angular CLI.
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

enableProdMode();
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
