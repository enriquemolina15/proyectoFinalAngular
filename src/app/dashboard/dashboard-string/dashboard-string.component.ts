import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardService } from 'src/app/shared/service/dashboard.service';
import { TextoService } from 'src/app/shared/service/texto.service';

@Component({
  selector: 'app-dashboard-string',
  templateUrl: './dashboard-string.component.html',
  styleUrls: ['./dashboard-string.component.css']
})
export class DashboardStringComponent implements OnInit,OnDestroy {
  @ViewChild(RouterOutlet) outlet!: RouterOutlet;
  public texto: string;
  public esValidado: boolean;
  public estaOculto: boolean;
  public estaOcultaTarjeta: boolean;
  public hayNotificacion: boolean;
  public notificacion: any;
  constructor(
    private textoService: TextoService,
    private dashboardService: DashboardService,
    private cd: ChangeDetectorRef
  ) {
    this.texto = "";
    this.esValidado = false;
    this.estaOculto = false;
    this.estaOcultaTarjeta = false;
    this.hayNotificacion = false;
    this.notificacion = {};

  }
  ngOnInit(): void {
    this.compartir();
    this.validado()
    
  }
  ngAfterViewInit() {
    if (this.outlet && this.outlet.isActivated) {
      this.estaOcultaTarjeta = true;
    } else {
      this.estaOcultaTarjeta = false;
    }
    this.cd.detectChanges();
    
    this.outlet.activateEvents.subscribe(() => {
      this.estaOcultaTarjeta = true;
      this.cd.detectChanges();
    });
    
    this.outlet.deactivateEvents.subscribe(() => {
      this.estaOcultaTarjeta = false;
      this.cd.detectChanges();
    });
  }
  
  
  compartir() {
    this.textoService.texto$.subscribe(t => this.texto = t);
    
    this.dashboardService.textArea$.subscribe(o => {
      this.estaOculto = o;
      this.cd.detectChanges();
    });

    this.dashboardService.notificaciones$.subscribe(n => {
      this.notificacion = n;
      this.cd.detectChanges();
    })
  }
  validado() {
    this.textoService.validacion$.subscribe(v => {
      this.esValidado = v
    });
  }
  desactivarNotificacion(tipo: string) {
    this.notificacion[tipo] = false;
    this.dashboardService.tarjetaEstaOculto(true);
    
  }
  
  enviarTexto() {
    this.textoService.actualizarTexto(this.texto);
  }
  
  ngOnDestroy(): void {
    this.dashboardService.limpiarNotificaciones()
    this.textoService.actualizarTexto('');
  }
}
