import { Component, OnInit } from '@angular/core';
import { TextoService } from 'src/app/shared/service/texto.service';
import { MayusculasService } from '../../service/mayusculas.service';
import { DashboardService } from 'src/app/shared/service/dashboard.service';

@Component({
  selector: 'app-mayuscula',
  templateUrl: './mayuscula.component.html',
  styleUrls: ['./mayuscula.component.css']
})
export class MayusculaComponent implements OnInit {
  public texto: string;
  public resultado: string;
  constructor(
    private textoService: TextoService,
    private mayusculasService: MayusculasService,
    private dashboardService: DashboardService
  ) {
    this.texto = "";
    this.resultado = "";
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
  todoMayuscula() {
    if (this.esValidado()) { this.resultado = this.mayusculasService.todoMayuscula(this.texto); }
  }
  primeraMayuscula() {
    if (this.esValidado()) {
      this.resultado = this.mayusculasService.primeraMayuscula(this.texto);
    }
  }
  ultimaMayuscula() {
    if (this.esValidado()) {
      this.resultado = this.mayusculasService.ultimaMayuscula(this.texto);
    }
  }
  vocalesMayusculas() {
    if (this.esValidado()) {
      this.resultado = this.mayusculasService.vocalesMayusculas(this.texto);
    }
  }
  consonantesMayusculas() {
    if (this.esValidado()) {
      this.resultado = this.mayusculasService.consonantesMayusculas(this.texto);
    }

  }
  limpiar() {
    this.dashboardService.limpiarNotificaciones();
    this.textoService.actualizarTexto("");
    this.resultado = "";
  }
}
