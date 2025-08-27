import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MayusculasService {

  constructor() { }
  
  todoMayuscula(texto: string): string {
    return texto.toUpperCase();
  }
  
  primeraMayuscula(texto: string): string {
    const palabras = texto.toLowerCase().split(" ");
    for (let i in palabras) {
      palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].substring(1)
    }
    return palabras.join(" ")

  }
  ultimaMayuscula(texto: string): string {
    const palabras = texto.toLowerCase().split(" ");
    for (let i in palabras) {
      palabras[i] = palabras[i].substring(0, palabras[i].length - 1) + palabras[i].charAt(palabras[i].length - 1).toUpperCase();
    }
    return palabras.join(" ");
  }

  vocalesMayusculas(texto: string): string {
    const caracteres = texto.toLowerCase().split("");
    for (let i in caracteres) {
      if (caracteres[i] == 'a' || caracteres[i] == 'e' || caracteres[i] == 'i' || caracteres[i] == 'o' || caracteres[i] == 'u') {
        caracteres[i] = caracteres[i].toUpperCase();
      }
    }
    return caracteres.join("");
  }

  consonantesMayusculas(texto: string): string {
    const caracteres = texto.toLowerCase().split("");
    for (let i in caracteres) {
      if (!(caracteres[i] == 'a' || caracteres[i] == 'e' || caracteres[i] == 'i' || caracteres[i] == 'o' || caracteres[i] == 'u')) {
        caracteres[i] = caracteres[i].toUpperCase();
      }
    }
    return caracteres.join("");
  }
}
