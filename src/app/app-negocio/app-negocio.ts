import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-negocio',
  imports: [],
  templateUrl: './app-negocio.html',
  styleUrl: './app-negocio.css',
})
export class AppNegocio {
  // A diferencia de variables normales:
  //nombre = signal('Daniel');
  //Se leen así:{{ nombre() }}
  //Porque son funciones reactivas
  nombre = signal('Salteñas Doña Mary');
  categoria = signal('Comida');
  ubicacion = signal('Cochabamba');
}
