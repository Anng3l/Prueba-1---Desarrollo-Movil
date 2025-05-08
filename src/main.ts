import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { IonicModule } from "@ionic/angular"

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

import { provideFirebaseApp, initializeApp } from "@angular/fire/app";
import { provideFirestore, getFirestore } from "@angular/fire/firestore";
import { environment } from './environments/environment';
import { enableProdMode, importProvidersFrom } from '@angular/core';

//En caso de producción
if (environment.production)
{
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(IonicModule.forRoot({})),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.mifirebaseConfig)),  
    provideFirestore(() => getFirestore())
  ],
});


