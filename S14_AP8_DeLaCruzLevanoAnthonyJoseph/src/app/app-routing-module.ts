import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Adopciones } from './pages/adopciones/adopciones';
import { Servicios } from './pages/servicios/servicios';
import { Contacto } from './pages/contacto/contacto';
import { Login } from './pages/login/login';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: Login },
  { path: 'home', component: Home },
  { path: 'adopciones', component: Adopciones },
  { path: 'servicios', component: Servicios },
  { path: 'contacto', component: Contacto },

  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}