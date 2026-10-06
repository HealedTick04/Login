/*import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Login');
}*/
/*
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './components/login/login';
// Si tu archivo en login se llama login.ts usa la siguiente línea:


// (NOTA: Si tu archivo dentro de login se llama login.component.ts, 
// cambia la línea de arriba por: import { LoginComponent } from './components/login/login.component';)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Login';
}*/
//AL PONER EL INDEX.HTML O HOME
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Login';
}