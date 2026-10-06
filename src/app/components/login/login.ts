/*import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {}*/

//AL HACER EL REGISTRO.HTML
/*
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {}*/
//AL HACER EL INDEX.HTML O HOME
/*import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  constructor(private router: Router) {}

  onLogin(event: Event, form: NgForm) {
    event.preventDefault(); // Detiene el envio nativo por URL (?email=...)
    
    if (form.valid) {
      this.router.navigate(['/index']);
    }
  }
}*/
//AL CREAR LOGEAR PARA EL INDEX
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  constructor(private router: Router) {}

  onLogin(event: Event, form: NgForm) {
    event.preventDefault();

    if (form.valid) {
      const storedUser = localStorage.getItem('registeredUser');

      if (storedUser) {
        const user = JSON.parse(storedUser);

        // Verificamos si las credenciales coinciden
        if (user.email === form.value.email && user.password === form.value.password) {
          // Guardamos la sesión activa con el nombre
          localStorage.setItem('currentUser', JSON.stringify({ nombre: user.nombre }));
          this.router.navigate(['/index']);
        } else {
          alert('Correo o contraseña incorrectos');
        }
      } else {
        alert('No hay ningún usuario registrado. Por favor regístrate primero.');
      }
    }
  }
}