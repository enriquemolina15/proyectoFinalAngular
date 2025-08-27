import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

   setLocal<T>(llave: string, valor: T) {
    localStorage.setItem(llave, JSON.stringify(valor));
  }

  getLocal<T>(llave: string): T | null {
    const valor = localStorage.getItem(llave);
    return valor ? JSON.parse(valor) as T : null;
  }

  deleteLocal(llave: string) {
    localStorage.removeItem(llave);
  }
   
}
