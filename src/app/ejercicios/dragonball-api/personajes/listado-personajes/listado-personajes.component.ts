import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DragonballService } from '../../service/dragonball.service';
import { CompartirService } from '../../service/compartir.service';
import { forkJoin, Subscription } from 'rxjs';
import { PersonajeDetalle } from '../../interfaces/personaje-detalle';
import { AuthService } from 'src/app/components/auth/service/auth.service';

@Component({
  selector: 'app-listado-personajes',
  templateUrl: './listado-personajes.component.html',
  styleUrls: ['./listado-personajes.component.css']
})
export class ListadoPersonajesComponent implements OnInit, OnDestroy {
  private subs: Subscription;
  public listaPersonajes: PersonajeDetalle[];
  public personajeSeleccionado: any;
  public actual: number;
  public valorInicio: string;
  public dialogoVisible: boolean;
  public personajesFiltrados: PersonajeDetalle[];
  public titulo1: string;
  public titulo2: string;
  public tablaVisible: boolean;
  constructor(
    private dragoballService: DragonballService,
    private compartirPersonaje: CompartirService,
    private router: Router,
  ) {
    this.subs = new Subscription();
    this.listaPersonajes = [];
    this.actual = 0;
    this.personajeSeleccionado = null;
    this.valorInicio = "";
    this.dialogoVisible = false;
    this.personajesFiltrados = [];
    this.titulo1 = "";
    this.titulo2 = "";
    this.tablaVisible = false;
  }
  ngOnInit(): void {
    this.listadoPersonajes();
  }
  listadoPersonajes() {
    const id = history.state.idPersonaje
    const subListaPersonaje = this.dragoballService.obtenerListadoPersonajes().subscribe(data => {
      this.listaPersonajes = data;
      if (id !== undefined) {
        this.actual = id - 1;
      }
    })
    this.subs.add(subListaPersonaje);
  }
  anterior() {
    if (this.actual > 0) this.actual--;
  }

  siguiente() {
    if (this.actual < this.listaPersonajes.length - 1) this.actual++;
  }
  cambiarPersonaje(event: Event) {

    const value = (event.target as HTMLSelectElement).value;
    const index = Number(value);

    if (value !== '' && !isNaN(index)) {
      this.actual = index;
      this.valorInicio = value;
    } else {
      this.valorInicio = ""
    }
  }
  enviarPersonaje(id: number) {
    this.compartirPersonaje.actualizarIdPersonaje(id)
    this.router.navigate(['/personajes-dragonball']);
  }

  cerrar() {
    this.router.navigate(['/dashboard-dragonball/dragonball'])
  }
  abrirDialogo() {
    this.dialogoVisible = true;
  }

  cargarFaqs(opcion: string) {
    const peticiones = this.listaPersonajes.map(p =>
      this.dragoballService.obtenerPersonaje(p.id)
    );
    if (opcion === 'noTransformaciones') {
      forkJoin(peticiones).subscribe((resultados: any[]) => {
        this.personajesFiltrados = resultados.filter(p => p.transformaciones == 0);
        this.titulo1 = "¿Que personajes no se transforman?"
        this.titulo2 = this.personajesFiltrados.length.toString() + " personajes no tienen transformaciones";
        this.tablaVisible = true;
      });
    } else {

      forkJoin(peticiones).subscribe((resultados: any[]) => {
        this.personajesFiltrados = resultados.filter(p => p.planetaEsDestruido);
        this.titulo1 = "¿Que personajes tienen su planeta destruido?"
        this.titulo2 = this.personajesFiltrados.length + " personajes sin planeta."
        this.tablaVisible = true;
      });
    }
  }


  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}

