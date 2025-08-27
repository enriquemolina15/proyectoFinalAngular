import { CanActivateChildFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../service/auth.service';

export const authChildGuard: CanActivateChildFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

   const rolesPermitidos: string[] = route.data['rolesPermitidos'] || [];

  const usuario = auth.obtenerUsuario(); 
  const rol = usuario?.rol;
  console.log('rol: ',rol);
  

  if (!rol || !rolesPermitidos.includes(rol)) {
    router.navigate(['auth/acceso']);
    return false;
  }

  return true;
};
