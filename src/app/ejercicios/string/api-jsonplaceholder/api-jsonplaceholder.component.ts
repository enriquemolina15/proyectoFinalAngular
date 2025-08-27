import { Component, OnDestroy, OnInit } from '@angular/core';
import { JsonplaceholderService } from './service/jsonplaceholder.service';
import { TextoService } from 'src/app/shared/service/texto.service';
import { DashboardService } from 'src/app/shared/service/dashboard.service';

@Component({
  selector: 'app-api-jsonplaceholder',
  templateUrl: './api-jsonplaceholder.component.html',
  styleUrls: ['./api-jsonplaceholder.component.css']
})
export class ApiJsonplaceholderComponent implements OnInit,OnDestroy {
  public publicacion: string;
  public textArea: boolean;
  public numero:number|null;
  public esCompartido:boolean;
  public cargando:boolean;

  constructor(
    private jsonplaceholder: JsonplaceholderService,
    private textoService: TextoService,
    private dashboardService: DashboardService
  ) {
    this.publicacion = "";
    this.textArea = false;
    this.numero = null;
    this.esCompartido = false;
    this.cargando = false;
  }
  ngOnInit(): void {
    this.dashboardService.textAreaEstaOculto(true);
  }
  
  
  async cargarPost(): Promise<void> {
    if(this.numero != null){
      this.cargando = true;
      this.publicacion = await this.jsonplaceholder.obtenerPost(this.numero.toString());
      this.esCompartido = true;
      this.cargando = false;
      
    }
    
  }
  compartir(){
    this.textoService.actualizarTexto(this.publicacion);
    this.dashboardService.activarNotificaciones();

  }
   limpiar(){
    this.numero = null;
    this.publicacion="";
    this.esCompartido = false;
  }
   ngOnDestroy(): void {
     this.dashboardService.textAreaEstaOculto(false);
   
  }
}
