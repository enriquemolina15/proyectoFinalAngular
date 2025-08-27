import { Component, OnDestroy, OnInit } from '@angular/core';
import { DragonballService } from '../../service/dragonball.service';
import { CompartirService } from '../../service/compartir.service';
import { Router } from '@angular/router';
import { forkJoin, Subscription } from 'rxjs';
import { PlanetaDetalle } from '../../interfaces/planeta-detalle';

@Component({
  selector: 'app-listado-planetas',
  templateUrl: './listado-planetas.component.html',
  styleUrls: ['./listado-planetas.component.css']
})
export class ListadoPlanetasComponent implements OnInit, OnDestroy {
  private subs: Subscription;
  public listaPlanetas: PlanetaDetalle[];
  public planetasFiltrados: PlanetaDetalle[];
  public planetaSeleccionado: any;
  public titulo1:string;
  public titulo2:string;
  public tituloDialogo:string;
  public actual: number;
  public valorInicio: string;
  public dialogoVisible: boolean;
  public tablaVisible: boolean;
  constructor(
    private dragoballService: DragonballService,
    private compartirPlaneta: CompartirService,
    private router: Router
  ) {
    this.subs = new Subscription();
    this.listaPlanetas = [];
    this.planetasFiltrados = [];
    this.actual = 0;
    this.planetaSeleccionado = null;
    this.valorInicio = "";
    this.dialogoVisible = false;
    this.tablaVisible = false;
    this.titulo1 = "";
    this.titulo2 = "";
    this.tituloDialogo = "";
  }
  ngOnInit(): void {
    this.listadoPlanetas();
  }
  listadoPlanetas() {
    const nombrePlaneta = history.state.nombrePlaneta

    const subListadoPlaneta = this.dragoballService.obtenerListadoPlanetas().subscribe(data => {
      this.listaPlanetas = data;
      const index = this.listaPlanetas.findIndex(p => p.nombre === nombrePlaneta);
      if (nombrePlaneta !== undefined) {
        this.actual = index;
      }
    })

    this.subs.add(subListadoPlaneta);
  }
  anterior() {
    if (this.actual > 0) this.actual--;

  }

  siguiente() {
    if (this.actual < this.listaPlanetas.length - 1) this.actual++;
  }
  cambiarPlaneta(event: Event) {

    const value = (event.target as HTMLSelectElement).value;
    const index = Number(value);

    if (value !== '' && !isNaN(index)) {
      this.actual = index;
      this.valorInicio = value;
    } else {
      this.valorInicio = ""
    }
  }
  enviarPlaneta(id: number) {
    this.compartirPlaneta.actualizarIdPlaneta(id)
    this.router.navigate(['/planetas-dragonball']);
  }
  cerrar() {
    this.router.navigate(['/dashboard-dragonball/dragonball'])
  }
  abrirDialogo() {
    this.dialogoVisible = true;
  }
  
 cargarFaqs(opcion: string) {
   const peticiones = this.listaPlanetas.map(p =>
     this.dragoballService.obtenerPlaneta(p.idPlaneta)
   );
  if (opcion === 'destruido') {
    forkJoin(peticiones).subscribe((resultados: any[]) => {
      this.planetasFiltrados = resultados.filter(p => p.esDestruido);
      this.titulo1 ="¿Que planetas estan destruidos?"
      this.titulo2 = "Planetas destuidos: "+this.planetasFiltrados.length.toString()
      this.tablaVisible = true;
    });
  } else {

    forkJoin(peticiones).subscribe((resultados: any[]) => {
      this.planetasFiltrados = resultados.filter(p => !p.tieneNativos);
      this.titulo1 = "¿Que planetas no tienen habitantes conocidos?"
      this.titulo2 ="Planetas sin personajes conocidos: "+this.planetasFiltrados.length
      this.tablaVisible = true;
    });
  }
}


  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}


