import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideIonicAngular(),
    provideHttpClient(),   // <- AQUI
    ...(appConfig.providers || []), 
  ],
}).catch(err => console.error(err));
