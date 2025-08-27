import { Component, OnInit } from '@angular/core';
import { CookieService } from '../service/cookie.service';

@Component({
  selector: 'app-almacenamiento-cookie',
  templateUrl: './almacenamiento-cookie.component.html',
  styleUrls: ['./almacenamiento-cookie.component.css']
})
export class AlmacenamientoCookieComponent implements OnInit{
 public nombre: string;
  public valor: string;
  public cookies: { nombre: string, valor: string }[];
  constructor(
    private cookieService:CookieService
  ) {
    this.nombre = '';
    this.valor = '';
    this.cookies = [];
  }
  ngOnInit(): void {
    this.cargarCookies();
  }
  guardar(): void {
    if (!this.nombre.trim() || !this.valor.trim()) return;
    this.cookieService.setCookie(this.nombre, this.valor);
    this.resetFormulario();
    this.cargarCookies();
  }

  cargarCookies() {
    this.cookies = this.cookieService.getCookies();
   
  }
  actualizarCookie(index: number): void {
    const cookie = this.cookies[index];
    if (!cookie.nombre.trim() || !cookie.valor.trim()) return;
    this.nombre = cookie.nombre

    if (this.valor !== '') {
      this.cookieService.editarCookie(cookie.nombre, this.valor);
      this.cargarCookies();
    }

  }

  borrarCookie(row: any): void {
    this.cookieService.deleteCookie(row.nombre)
     this.cargarCookies();
  }
 
  private resetFormulario(): void {
    this.nombre = '';
    this.valor = '';
  }
}
