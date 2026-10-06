/*import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-index',
  styleUrl: './index.css',
  templateUrl: './index.html',
})
export class Index {}*/
//AL AGREGAR EN EL INDEX EL NAVBAR
import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar'; // <--- Importamos el componente del compañero

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [Navbar], // <--- Lo agregamos a los imports
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class Index {}