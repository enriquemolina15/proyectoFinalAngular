import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

   setCookie(nombre: string, valor: string, dias: number = 365) {
    const d = new Date();
    d.setTime(d.getTime() + (dias * 24 * 60 * 60 * 1000));
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${nombre}=${valor};${expires};path=/`;
  }

  getCookieeees(): { nombre: string, valor: string }[] {
    return document.cookie.split(';').map(c => {
      const [nombre, valor] = c.trim().split('=');
      return { nombre, valor };
    });
  }
  getCookies(): { nombre: string, valor: string }[] {
    const cookies: { nombre: string, valor: string }[] = [];
    document.cookie.split(';').forEach(c => {
      const [nombre, valor] = c.trim().split('=');
      if (nombre && valor) { 
        cookies.push({ nombre, valor });
      }
    });
    return cookies;
  }

  deleteCookie(nombre: string) {
    document.cookie = `${nombre}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
   editarCookie(nombre: string, valor: string, dias: number = 30) {
    this.setCookie(nombre, valor, dias);
  }

}
