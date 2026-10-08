import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

// Función que ya tienes configurada en utileria.js
declare function validarNumeroControl(numero: string): boolean;

@Component({
  selector: 'app-captura-alumno',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './capturar-alumno.html',
  styleUrl: './capturar-alumno.css'
})
export class CapturaAlumno {

  formulario: FormGroup;
  mostrarModal: boolean = false;
  esMayorDeEdad: boolean = false;
  edadCalculada: number = 0;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      numeroControl: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      fechaNacimiento: ['', Validators.required]
    });
  }

  // Calcula los años cumplidos a partir de la fecha seleccionada
  calcularEdad(fecha: string): number {
    const nacimiento = new Date(fecha);
    const hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const diferenciaMes = hoy.getMonth() - nacimiento.getMonth();

    if (diferenciaMes < 0 || (diferenciaMes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad;
  }

  guardar(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    const numControl = this.formulario.value.numeroControl;

    // Validación obligatoria con utileria.js (exactamente 6 dígitos)
    if (!validarNumeroControl(numControl)) {
      alert('El número de control debe tener exactamente 6 dígitos numéricos.');
      return;
    }

    // Calculamos edad y activamos el Modal
    this.edadCalculada = this.calcularEdad(this.formulario.value.fechaNacimiento);
    this.esMayorDeEdad = this.edadCalculada >= 18;
    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
    this.formulario.reset();
  }

}