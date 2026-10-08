import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: 'sidebar.html',
  styleUrl: 'sidebar.css'
})
export class SidebarComponent {

  isOpen = false;
  usuariosOpen = false;

  toggleSidebar(): void {
    this.isOpen = !this.isOpen;
  }

  toggleUsuarios(): void {
    this.usuariosOpen = !this.usuariosOpen;
  }
}
