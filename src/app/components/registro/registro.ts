/*import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-registro',
  styleUrl: './registro.css',
  templateUrl: './registro.html',
})
export class Registro {}*/

//AL HACER REGISTRO.HTML PERO LO ANTERIOR YA ESTABA POR DEFECTO
/*import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {}*/
//AL HACER LOGEAR PARA INDEX
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {

  constructor(private router: Router) {}

  onRegister(event: Event, form: NgForm) {
    event.preventDefault();

    if (form.valid) {
      // Guardamos la información del usuario registrado
      const userData = {
        nombre: form.value.nombre,
        email: form.value.email,
        password: form.value.password
      };

      localStorage.setItem('registeredUser', JSON.stringify(userData));
      alert('¡Registro exitoso! Por favor inicia sesión.');
      
      // Redirigimos al login para que ingrese sus credenciales
      this.router.navigate(['/login']);
    }
  }
}