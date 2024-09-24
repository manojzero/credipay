import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { tokenInterceptor } from './service/token.interceptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from './pages/header/header.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),
     provideAnimationsAsync(), provideAnimationsAsync(),
      provideHttpClient(withFetch(),withInterceptorsFromDi(),withInterceptors([tokenInterceptor]),
    ),importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),]
};


//,withInterceptors([tokenInterceptor]),