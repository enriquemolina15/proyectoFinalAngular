import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlmacenamientoService {
// =========================
  //  COOKIES
  // =========================
  setCookie(nombre: string, valor: string, dias: number = 365) {
    const d = new Date();
    d.setTime(d.getTime() + (dias * 24 * 60 * 60 * 1000));
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${nombre}=${encodeURIComponent(valor)};${expires};path=/`;
  }

  getCookies(): { nombre: string, valor: string }[] {
    if (!document.cookie) return [];
    return document.cookie.split(';').map(c => {
      const [nombre, valor] = c.trim().split('=');
      return { nombre, valor: decodeURIComponent(valor || '') };
    });
  }

  editarCookie(nombre: string, valor: string, dias: number = 30) {
    this.setCookie(nombre, valor, dias);
  }

  deleteCookie(nombre: string) {
    document.cookie = `${nombre}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  // =========================
  //  LOCAL STORAGE
  // =========================
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

  // =========================
  //  SESSION STORAGE
  // =========================
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