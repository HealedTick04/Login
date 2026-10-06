/*import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {}*/
//CREACION DEL NAVBAR
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  isDropdownOpen = false;

  constructor(private router: Router) {}

  // Muestra u oculta el menú al hacer clic sobre el usuario
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Cierra sesión y regresa a la pantalla de Login
  logout() {
    this.isDropdownOpen = false;
    this.router.navigate(['/login']);
  }

  // Desplazamiento suave hacia la sección seleccionada
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
     const navbarHeight = 70; // Altura aproximada del navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth'
      });
    }
  }
}