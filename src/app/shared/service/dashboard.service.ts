import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
 private estadoInicial = {
    mayusculas: false,
    minusculas: false,
    aleatorio: false,
    automatico: false
  };

  private textArea = new BehaviorSubject<boolean>(false);
  textArea$ = this.textArea.asObservable();

  textAreaEstaOculto(estaOculto: boolean) {
    this.textArea.next(estaOculto);
  }
  private tarjeta = new BehaviorSubject<boolean>(false);
  tarjeta$ = this.tarjeta.asObservable();

  tarjetaEstaOculto(estaOculto: boolean) {
    this.tarjeta.next(estaOculto);
  }
  
   private notificaciones = new BehaviorSubject(this.estadoInicial);
  notificaciones$ = this.notificaciones.asObservable();

  activarNotificaciones() {
    this.notificaciones.next({
      mayusculas: true,
      minusculas: true,
      aleatorio: true,
      automatico: true
    });
  }

  limpiarNotificaciones() {
    this.notificaciones.next({ ...this.estadoInicial });
  }
}
