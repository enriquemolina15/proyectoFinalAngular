import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MinusculasService {

  constructor() { }
   
  todoMinuscula(texto:string):string {
   return texto.toLowerCase(); 
  }
  primeraMinuscula(texto:string):string {
      const palabras = texto.toUpperCase().split(" ");
      for (let i in palabras) {
        palabras[i] = palabras[i].charAt(0).toLowerCase() + palabras[i].substring(1)
      }
      return palabras.join(" ")
  }
  ultimaMinuscula(texto:string):string {
      const palabras = texto.toUpperCase().split(" ");
      for (let i in palabras) {
        palabras[i] = palabras[i].substring(0, palabras[i].length - 1) + palabras[i].charAt(palabras[i].length - 1).toLowerCase();
      }
      return palabras.join(" ");
    
  }
  vocalesMinusculas(texto:string):string {
     const caracteres = texto.toUpperCase().split("");
      for (let i in caracteres) {
        if (caracteres[i] == 'A' || caracteres[i] == 'E' || caracteres[i] == 'I' || caracteres[i] == 'O' || caracteres[i] == 'U') {
          caracteres[i] = caracteres[i].toLowerCase();
        }
      }
      return caracteres.join("");
    
  }
  consonantesMinusculas(texto:string):string {
     const caracteres = texto.toUpperCase().split("");
      for (let i in caracteres) {
        if (!(caracteres[i] == 'A' || caracteres[i] == 'E' || caracteres[i] == 'I' || caracteres[i] == 'O' || caracteres[i] == 'U')) {
          caracteres[i] = caracteres[i].toLowerCase();
        }
      }
      return caracteres.join("");
    
  }
}
