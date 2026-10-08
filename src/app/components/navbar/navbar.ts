import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {

  userName: string = 'Usuario';
  isDropdownOpen: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Verificamos que estemos en el navegador antes de leer localStorage
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        try {
          const user = JSON.parse(storedUser);
          this.userName = user.nombre || user.email || 'Usuario';
        } catch (e) {
          this.userName = storedUser;
        }
      }
    }
  }

  // Abre y cierra el menú desplegable al hacer clic
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Cierra la sesión y regresa a la pantalla de login
  logout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  // Para evitar errores con los enlaces de tu barra si hacen scroll
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}