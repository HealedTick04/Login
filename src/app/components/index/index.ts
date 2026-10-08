import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { CapturaUsuario } from '../../features/usuarios/pages/capturar-usuario/capturar-usuario';
import { CapturaAlumno } from '../../features/alumnos/pages/capturar-alumno/capturar-alumno';
// (Importaremos CapturaAlumno en el siguiente paso cuando lo creemos)

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [Navbar, CapturaUsuario, CapturaAlumno],
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class Index {
  // Controla qué vista se muestra: 'inicio' | 'usuarios' | 'alumnos'
  vistaActual: string = 'inicio';

  // Controla los menús desplegables del Sidebar
  menuUsuariosAbierto: boolean = true;
  menuAlumnosAbierto: boolean = true;

  cambiarVista(vista: string): void {
    this.vistaActual = vista;
  }

  toggleMenuUsuarios(): void {
    this.menuUsuariosAbierto = !this.menuUsuariosAbierto;
  }

  toggleMenuAlumnos(): void {
    this.menuAlumnosAbierto = !this.menuAlumnosAbierto;
  }
}