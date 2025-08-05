import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, LOCALE_ID  } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { httpInterceptorProviders } from './interceptors';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
     { provide: LOCALE_ID, useValue: 'fr-FR' },
    provideHttpClient(),
    httpInterceptorProviders,
  ]
};
