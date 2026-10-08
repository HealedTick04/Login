import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

declare function validarCorreo(correo: string): boolean;
declare function validarPassword(password: string): boolean;

@Component({
  selector: 'app-captura-usuario',
  imports: [ReactiveFormsModule],
  templateUrl: 'capturar-usuario.html',
  styleUrl: 'capturar-usuario.css'
})
export class CapturaUsuario {

  formulario: FormGroup;

  constructor(private fb: FormBuilder) {

    this.formulario = this.fb.group({

      nombre: [
        '',
        Validators.required
      ],

      correo: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ]

    });

  }

  guardar(): void {

    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    const correo = this.formulario.value.correo;
    const password = this.formulario.value.password;

    if (!validarCorreo(correo)) {
      alert('El correo no es válido');
      return;
    }

    if (!validarPassword(password)) {
      alert('La contraseña debe tener al menos 8 caracteres');
      return;
    }

    console.log('Usuario válido');
    console.log(this.formulario.value);
  }
}