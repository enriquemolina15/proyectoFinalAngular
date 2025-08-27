import { Component } from '@angular/core';
import { AuthService } from '../auth/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(
    private authService: AuthService, private router: Router
  ) { }
  usuarioLogueado(): string  {
    return this.authService.obtenerNombreUsuario();
  }
  
  esPosibleQueSeaElProfe(): boolean {
  if (!this.usuarioLogueado) return false; // si está vacío
  return this.usuarioLogueado()[0].toLowerCase() === 'j';
}
  esPosibleQueSeaYo(): boolean {
  if (!this.usuarioLogueado) return false; // si está vacío
  return this.usuarioLogueado() === 'administrador';
}

  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['']);
  }
  estaLogueado():boolean {
    return this.authService.estaAutenticado()
  }
}
