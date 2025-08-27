import { Component, OnDestroy, OnInit } from '@angular/core';
import { TextoService } from 'src/app/shared/service/texto.service';
import { AleatoriosService } from '../../service/aleatorios.service';
import { DashboardService } from 'src/app/shared/service/dashboard.service';

@Component({
  selector: 'app-automatico',
  templateUrl: './automatico.component.html',
  styleUrls: ['./automatico.component.css']
})
export class AutomaticoComponent implements OnInit, OnDestroy {
  public texto: string;
  public resultado: string;
  public accionAleatoria: string;
  public intervalo: any;
  public velocidad: number;
  constructor(
    private textoService: TextoService,
    private aleatoriosService: AleatoriosService,
    private dashboardService:DashboardService
  ) {
    this.texto = "";
    this.resultado = "";
    this.accionAleatoria = "";
    this.intervalo = null;
    this.velocidad = 1000;
  }
  ngOnInit() {
    this.textoService.texto$.subscribe(t => this.texto = t);
    console.log("texto:", this.texto);
    
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
  toggle(): void {
    if (this.esValidado()) {
      if (this.intervalo) {
        clearInterval(this.intervalo);
        this.intervalo = null;
      } else {
        this.intervalo = setInterval(() => this.aleatorio(), this.velocidad);
      }
    }
  }
  acelerar(): void {
    if (this.esValidado()) {
      if (this.velocidad > 250) {
        this.velocidad -= 250;
        console.log("velocidad: ", this.velocidad);
        this.reiniciarIntervalo();
      }
    }
  }
  decelerar(): void {
    if (this.esValidado()) {
      this.velocidad += 250;
      console.log("velocidad: ", this.velocidad);
      this.reiniciarIntervalo();
    }
  }
  
  reiniciarIntervalo(): void {
    if (this.intervalo) {
      clearInterval(this.intervalo);
      this.intervalo = setInterval(() => this.aleatorio(), this.velocidad);
    }
  }
  limpiar() {
    this.dashboardService.limpiarNotificaciones();
    this.textoService.actualizarTexto("");
    this.resultado = "";
  }
  
  ngOnDestroy(): void {
   if (this.intervalo) {
    clearInterval(this.intervalo);
    this.intervalo = null;
  }
  this.resultado = "";
  this.accionAleatoria = "";
  }
}