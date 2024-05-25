/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import Hotjar from '@hotjar/browser';

const siteId = 4997789;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
