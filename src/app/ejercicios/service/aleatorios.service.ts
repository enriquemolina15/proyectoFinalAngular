import { Injectable } from '@angular/core';
import { MayusculasService } from './mayusculas.service';
import { MinusculasService } from './minusculas.service';

@Injectable({
  providedIn: 'root'
})
export class AleatoriosService {

  constructor(
    private mayusculasService: MayusculasService,
    private minusculasService: MinusculasService
  ) { }

   transformacionAleatoria(texto: string): { resultado: string, accion: string }{

    const funciones: ((txt: string) => string)[] = [
      (txt) => this.mayusculasService.todoMayuscula(txt),
      (txt) => this.mayusculasService.primeraMayuscula(txt),
      (txt) => this.mayusculasService.ultimaMayuscula(txt),
      (txt) => this.mayusculasService.vocalesMayusculas(txt),
      (txt) => this.mayusculasService.consonantesMayusculas(txt),
      (txt) => this.minusculasService.todoMinuscula(txt),
      (txt) => this.minusculasService.primeraMinuscula(txt),
      (txt) => this.minusculasService.ultimaMinuscula(txt),
      (txt) => this.minusculasService.vocalesMinusculas(txt),
      (txt) => this.minusculasService.consonantesMinusculas(txt)
    ];

    const acciones = [
      "Todas mayusculas",
      "Mayuscula la primera letra de cada palabra",
      "Mayuscula la ultima letra de cada palabra",
      "Todas la vocales mayusculas",
      "Todas la consonantes mayusculas",
      "Todas minusculas",
      "Minuscula la primera letra de cada palabra",
      "Minuscula la ultima letra de cada palabra",
      "Todas la vocales minusculas",
      "Todas la consonantes minusculas"
    ];

    const random = Math.floor(Math.random() * funciones.length);
    
    return {
      resultado: funciones[random](texto),
      accion: acciones[random]
    };
  }
}
