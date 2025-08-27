import { Component, OnDestroy, OnInit } from '@angular/core';
import { PersonajeDetalle } from '../../interfaces/personaje-detalle';
import { CompartirService } from '../../service/compartir.service';
import { DragonballService } from '../../service/dragonball.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit, OnDestroy {
  private subs: Subscription;
  public personaje: PersonajeDetalle | null;
  public transformaciones: PersonajeDetalle[];
  public id: number;
  public transformacionesVisibles: number
  public dialogoVisible!: boolean;
  constructor(
    private compartirService: CompartirService,
    private dragonballService: DragonballService,
    private router: Router
  ) {
    this.id = 0;
    this.transformaciones = [];
    this.transformacionesVisibles = 0;
    this.subs = new Subscription();
    this.personaje = null;
  }
  ngOnInit(): void {
    this.obtenerPersonaje();
  }
  
  obtenerPersonaje(){
    const subIdPersonaje = this.compartirService.idPersonaje$.subscribe(n => {
      if (n) {
        this.id = n;
        const subPersonaje = this.dragonballService.obtenerPersonaje(this.id).subscribe(data => {
          this.personaje = data;
        });
        this.subs.add(subPersonaje)
      }
    });
    this.subs.add(subIdPersonaje);
  }
  listaTransformaciones(nombre: number) {
    this.dragonballService.obtenerTransformaciones(nombre.toString()).subscribe(data => {
      this.transformaciones = data;
      this.dialogoVisible = true;
      this.mostrarConDelay();

    })
  }
  

  cerrar() {
        this.router.navigate(['dashboard-dragonball/dragonball/listadoPersonajes']);
  }

  verPlaneta(id: number) {
    const idPersonaje =this.personaje?.id
    this.compartirService.actualizarIdPlaneta(id)
    this.router.navigate(['/planetas-dragonball'],{state:{idPersonaje}});
  }

  mostrarConDelay() {
    this.transformacionesVisibles = 0;
    const total = this.transformaciones.length;
    const intervalo = 300; // ms entre cada aparición

    const mostrar = () => {
      if (this.transformacionesVisibles < total) {
        this.transformacionesVisibles++;
        setTimeout(mostrar, intervalo);
      }
    };
    mostrar();
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();

  }
}