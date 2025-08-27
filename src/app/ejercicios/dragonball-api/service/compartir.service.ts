import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompartirService {

  private idPersonaje = new BehaviorSubject<number>(0);
  idPersonaje$ = this.idPersonaje.asObservable();

  actualizarIdPersonaje(id: number) {
    this.idPersonaje.next(id);
  }
  private idPlaneta = new BehaviorSubject<number>(0);
  idPlaneta$ = this.idPlaneta.asObservable();

  actualizarIdPlaneta(nuevoId: number) {
    this.idPlaneta.next(nuevoId);
  }

}
