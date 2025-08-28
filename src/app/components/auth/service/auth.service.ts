import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly key = 'usuario';
  
  constructor() {}

   obtenerUsuario(): Usuario | null {
    const guardado = localStorage.getItem(this.key);
    if (guardado) {
      return guardado ? JSON.parse(guardado) as Usuario : null;
    }
    return  null;
  }
   obtenerNombreUsuario(): string  {
    const usuario = this.obtenerUsuario();
     if (!usuario) return "Sin registros";
    return usuario?.nombre;
  }
  registrar(nombre: string, clave: string, rol: string): boolean {
    if (localStorage.getItem(this.key)) {
      return false; // ya existe un usuario
    }
    const usuario: Usuario = {nombre, clave, rol };
    localStorage.setItem(this.key, JSON.stringify(usuario));
    return true;
  }
   login(nombre: string, clave: string): boolean {
    const guardado = this.obtenerUsuario();
    if (!guardado) return false;
    return guardado.nombre === nombre && guardado.clave === clave;
  }
  
 estaAutenticado(): boolean {
    return !!this.obtenerUsuario();
  }
  hasRole(rol: string): boolean {
    const usuario = this.obtenerUsuario();
    return usuario?.rol === rol;
  }
   logout(): void {
    localStorage.removeItem(this.key);
  }
  private esLogueado = new BehaviorSubject<boolean>(false);
    esLogueado$ = this.esLogueado.asObservable();
  
    estaLogueado(estaLogueado: boolean) {
      this.esLogueado.next(estaLogueado);
    }

}
