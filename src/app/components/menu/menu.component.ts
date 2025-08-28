import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from '../auth/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(
    public authService: AuthService, private router: Router, private cd: ChangeDetectorRef
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
    this.authService.estaLogueado(false);
    this.cd.detectChanges();
    this.router.navigate(['']);
  }
  
 
}
