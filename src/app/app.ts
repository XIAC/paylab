import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AppNegocio } from './app-negocio/app-negocio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, 
    AppNegocio, CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('paylab');
  mensaje: string = "Hola A TODOS"; 
   lista = [1, 2, 3, 4]; // solo para repetir
 // edad: number = 25;
  usuario = {
    nombre: '',
    email: '',
    edad: null as number | null
  };

  saludar(): void {
    console.log("Hola!");
  }
  registrar() {
    if (!this.usuario.nombre || !this.usuario.email) {
      this.mensaje = '⚠️ Completa los campos obligatorios';
      return;
    }
// Permite insertar variables dentro de un texto fácilmente
// 👉 usando ${}
// ``` → inicia el template literal O TEMPLATE STRING
    this.mensaje = `Usuario ${this.usuario.nombre}
                    registrado correctamente`;
// Forma antigua (sin template literal)
// let mensaje = "Hola " + nombre;
  }
}
