import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlanetaDetalle } from '../../interfaces/planeta-detalle';
import { DragonballService } from '../../service/dragonball.service';
import { CompartirService } from '../../service/compartir.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PersonajeDetalle } from '../../interfaces/personaje-detalle';

@Component({
  selector: 'app-planeta',
  templateUrl: './planeta.component.html',
  styleUrls: ['./planeta.component.css']
})
export class PlanetaComponent implements OnInit, OnDestroy{
 private subs: Subscription;
 public planeta: PlanetaDetalle | null;
  public nativos: PersonajeDetalle[];
  public nombre: string;
  public nativosVisibles: number
  dialogoVisible!: boolean;
  
  constructor(
    private compartirService: CompartirService,
    private dragonballService: DragonballService,
    private router: Router
  ) {
    this.nombre = '';
    this.nativos = [];
    this.nativosVisibles = 0;
    this.planeta = null;
    this.subs = new Subscription();
  }
  ngOnInit(): void {
    this.obtenerPlaneta();
  }
  obtenerPlaneta(){
    const subIdPlaneta = this.compartirService.idPlaneta$.subscribe(id => {
      if (id) {
       const subPlaneta = this.dragonballService.obtenerPlaneta(id).subscribe(data => {
          this.planeta = data;
        });
        this.subs.add(subPlaneta)
      }
    });
    
    this.subs.add(subIdPlaneta);
  }
  
  listaNativos(id: number) {
    this.dragonballService.obtenerNativos(id.toString()).subscribe(data => {
      this.nativos = data;
      this.dialogoVisible = true;
      this.mostrarConDelay();

    })
  }
   verPersonaje(id: number) {
    this.compartirService.actualizarIdPersonaje(id)
    this.router.navigate(['/personajes-dragonball']);
  }
  

  cerrar() {
    const idPersonaje = history.state.idPersonaje
    const nombrePlaneta = this.planeta?.nombre
    
    if(idPersonaje !== undefined){
      this.router.navigate(['dashboard-dragonball/dragonball/listadoPersonajes'],{state:{idPersonaje}});

    }else{
      this.router.navigate(['dashboard-dragonball/dragonball/listadoPlanetas'],{state:{nombrePlaneta}});

    }
   
  }
 
mostrarConDelay() {
  this.nativosVisibles = 0;
  const total = this.nativos.length;
  const intervalo = 300; 

  const mostrar = () => {
    if (this.nativosVisibles < total) {
      this.nativosVisibles++;
      setTimeout(mostrar, intervalo);
    }
  };
  mostrar();
}
ngOnDestroy() {
    this.subs.unsubscribe();
  }
}