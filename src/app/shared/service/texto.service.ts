import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class TextoService {
  


  private texto = new BehaviorSubject<string>('');
  texto$ = this.texto.asObservable();

  actualizarTexto(nuevoTexto: string) {
    this.texto.next(nuevoTexto);
  }

  private validacion = new BehaviorSubject<boolean>(false);
  validacion$ = this.validacion.asObservable();

  estaValidado(estaValidado: boolean) {
    this.validacion.next(estaValidado);
  }
 cerrar(){
  this.estaValidado(false);
 }
}
