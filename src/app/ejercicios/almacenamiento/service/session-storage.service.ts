import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

   setSession<T>(llave: string, valor: T) {
    sessionStorage.setItem(llave, JSON.stringify(valor));
  }

  getSession<T>(llave: string): T | null {
    const valor = sessionStorage.getItem(llave);
    return valor ? JSON.parse(valor) as T : null;
  }

  deleteSession(llave: string) {
    sessionStorage.removeItem(llave);
  }

}
