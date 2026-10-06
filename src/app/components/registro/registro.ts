/*import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-registro',
  styleUrl: './registro.css',
  templateUrl: './registro.html',
})
export class Registro {}*/

//AL HACER REGISTRO.HTML PERO LO ANTERIOR YA ESTABA POR DEFECTO
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {}
