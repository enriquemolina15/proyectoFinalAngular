import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {
 async obtenerPost(post:string): Promise<string> {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post}`);
      const data = await response.json();
      console.log("servicio: ",data.body);
      
      return data.body;
    } catch (error) {
      return '❌ Error al obtener la publicacion. Inténtalo más tarde.';
    }
  }
}
