import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('S13_AP7_Joseph_Mascotas');

  constructor(private router: Router) {}

  mostrarLayout(): boolean {
    return this.router.url !== '/login';
  }
}