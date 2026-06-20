import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  password = '';
  mensaje = '';
  verPassword = false;

  constructor(private router: Router) {}

  iniciarSesion() {
    if (
      this.email === 'admin@miapp.com' &&
      this.password === '123456'
    ) {
      localStorage.setItem('login', 'true');
      this.router.navigate(['/home']);
    } else {
      this.mensaje = 'Correo o contraseña incorrectos';
    }
  }

  mostrarPassword() {
    this.verPassword = !this.verPassword;
  }
}