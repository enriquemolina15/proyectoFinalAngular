import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const rolesPermitidos: string[] = next.data['rolesPermitidos'] || [];
    const usuario = this.authService.obtenerUsuario(); 
    const rol = usuario?.rol;
    console.log('rol: ',rol);
    

    if (rol && rolesPermitidos.includes(rol)) {
      return true; // ✅ permitido
    } else {
      this.router.navigate(['auth/acceso']);
      return false;
    }
  }
}
