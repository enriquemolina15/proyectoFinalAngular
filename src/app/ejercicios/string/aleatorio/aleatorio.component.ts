import { Component } from '@angular/core';
import { TextoService } from 'src/app/shared/service/texto.service';
import { AleatoriosService } from '../../service/aleatorios.service';
import { DashboardService } from 'src/app/shared/service/dashboard.service';

@Component({
  selector: 'app-aleatorio',
  templateUrl: './aleatorio.component.html',
  styleUrls: ['./aleatorio.component.css']
})
export class AleatorioComponent {
  public texto: string;
  public resultado: string;
  public accionAleatoria:string
  constructor(
    private textoService: TextoService,
    private aleatoriosService:AleatoriosService,
    private dashboardService:DashboardService
  ) {
    this.texto = "";
    this.resultado = "";
    this.accionAleatoria = "";
  }
  ngOnInit() {
    this.textoService.texto$.subscribe(t => this.texto = t);

  }
 esValidado(): boolean {
    if (!this.texto.trim() || this.texto.length < 3) {
      this.textoService.estaValidado(true);
      return false;
    }
    return true;
  }
  
  aleatorio() {
    if (this.esValidado()) {
       const { resultado, accion } = this.aleatoriosService.transformacionAleatoria(this.texto);
      this.resultado = resultado;
      this.accionAleatoria = accion;
    }
  }
   limpiar(){
    this.dashboardService.limpiarNotificaciones();
    this.textoService.actualizarTexto("");
    this.resultado="";
  }
}
