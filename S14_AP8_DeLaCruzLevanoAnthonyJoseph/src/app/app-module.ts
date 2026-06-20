import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { Home } from './pages/home/home';
import { Adopciones } from './pages/adopciones/adopciones';
import { Servicios } from './pages/servicios/servicios';
import { Contacto } from './pages/contacto/contacto';
import { Login } from './pages/login/login';

@NgModule({
  declarations: [
    App,
    Home,
    Adopciones,
    Servicios,
    Contacto,
    Login
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule {}