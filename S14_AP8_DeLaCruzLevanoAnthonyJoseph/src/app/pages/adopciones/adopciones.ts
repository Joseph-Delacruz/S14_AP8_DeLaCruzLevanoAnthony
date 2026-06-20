import { Component } from '@angular/core';

@Component({
  selector: 'app-adopciones',
  standalone: false,
  templateUrl: './adopciones.html',
  styleUrl: './adopciones.css'
})
export class Adopciones {

  mascotaSeleccionada: any = null;

  mascotas = [
    {
      nombre: 'Luna',
      edad: '2 años',
      raza: 'Labrador',
      sexo: 'Hembra',
      estado: 'Disponible',
      imagen: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d'
    },
    {
      nombre: 'Max',
      edad: '1 año',
      raza: 'Golden Retriever',
      sexo: 'Macho',
      estado: 'Disponible',
      imagen: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b'
    },
    {
      nombre: 'Michi',
      edad: '3 años',
      raza: 'Mestiza',
      sexo: 'Hembra',
      estado: 'Disponible',
      imagen: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4'
    }
  ];

  nuevaMascota = {
    nombre: '',
    edad: '',
    raza: '',
    sexo: '',
    estado: '',
    imagen: ''
  };

  seleccionarMascota(mascota:any){
    this.mascotaSeleccionada = mascota;
  }

  agregarMascota(){

    if(
      this.nuevaMascota.nombre &&
      this.nuevaMascota.imagen
    ){

      this.mascotas.push({
        ...this.nuevaMascota
      });

      this.nuevaMascota = {
        nombre:'',
        edad:'',
        raza:'',
        sexo:'',
        estado:'',
        imagen:''
      };

    }

  }

}