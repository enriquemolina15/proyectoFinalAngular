import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChistesService {
  async cargarChiste(): Promise<string> {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();

      return data.value;

    } catch (error) {
      return '❌ Error al obtener el chiste. Inténtalo más tarde.';
    }

  }
  async cargarChistePorCategoria(categoria:string): Promise<string> {
    try {
      const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${categoria}`);
      const data = await response.json();

      return data.value;

    } catch (error) {
      return '❌ Error al obtener el chiste. Inténtalo más tarde.';
    }

  }
  async cargarCategorias(): Promise<string[]> {
  
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/categories');
      const data = await response.json();
      console.log("categorias", data);

      return data;

    } catch (error) {
      return [];
    }

  }
}