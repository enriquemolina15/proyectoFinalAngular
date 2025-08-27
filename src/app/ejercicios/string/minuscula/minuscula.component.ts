import { Component, OnInit } from '@angular/core';
import { TextoService } from 'src/app/shared/service/texto.service';
import { MinusculasService } from '../../service/minusculas.service';
import { DashboardService } from 'src/app/shared/service/dashboard.service';

@Component({
  selector: 'app-minuscula',
  templateUrl: './minuscula.component.html',
  styleUrls: ['./minuscula.component.css']
})
export class MinusculaComponent implements OnInit {
  public texto: string;
  public resultado: string;
  constructor(
    private textoService: TextoService,
    private minusculasService: MinusculasService,
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

  todoMinuscula() {
    if (this.esValidado()) { this.resultado = this.minusculasService.todoMinuscula(this.texto); }
  }
  
  primeraMinuscula() {
    if (this.esValidado()) {
      this.resultado = this.minusculasService.primeraMinuscula(this.texto);
    }
  }
  ultimaMinuscula() {
    if (this.esValidado()) {
      this.resultado = this.minusculasService.ultimaMinuscula(this.texto);
    }
  }
  vocalesMinusculas() {
    if (this.esValidado()) {
      this.resultado = this.minusculasService.vocalesMinusculas(this.texto);
    }
  }
  consonantesMinusculas() {
    if (this.esValidado()) {
      this.resultado = this.minusculasService.consonantesMinusculas(this.texto);

    }
  }
  limpiar() {
    this.dashboardService.limpiarNotificaciones();
    this.textoService.actualizarTexto("");
    this.resultado = "";
  }
}
