import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';

import { Environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth'

var config = {
  apiKey: Environment.firebase.apiKey,
  authDomain: Environment.firebase.authDomain,
  projectId: Environment.firebase.projectId,
  storageBucket: Environment.firebase.storageBucket,
  messagingSenderId: Environment.firebase.messagingSenderId,
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    RouterLink,
    RouterLinkActive,

    //Agregamos lo siguiente:
    provideFirebaseApp(() => initializeApp(Environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
