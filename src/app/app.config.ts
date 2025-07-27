import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {BasicAuthInterceptor} from './interceptor/basic-auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([BasicAuthInterceptor])
    ),
    provideRouter(routes),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ]
};

