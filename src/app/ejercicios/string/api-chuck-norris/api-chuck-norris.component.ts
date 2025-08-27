import { Component } from '@angular/core';
import { DashboardService } from 'src/app/shared/service/dashboard.service';
import { TextoService } from 'src/app/shared/service/texto.service';
import { ChistesService } from './service/chistes.service';
import { AuthService } from 'src/app/components/auth/service/auth.service';


@Component({
  selector: 'app-api-chuck-norris',
  templateUrl: './api-chuck-norris.component.html',
  styleUrls: ['./api-chuck-norris.component.css']
})
export class ApiChuckNorrisComponent {
  public publicacion: string;
  public textArea: boolean;
  public numero: number | null;
  public esCompartido: boolean;
  public categorias: string[];
  public categoriaSeleccionada: string;
  public cargando: boolean;
  public esUsuarioPlus:boolean;
  public esUsuarioPremiun:boolean;
  public mostrarMensaje1: boolean;
  public mostrarMensaje2: boolean;


  constructor(
    private chistesService: ChistesService,
    private textoService: TextoService,
    private dashboardService: DashboardService,
    private authService: AuthService
  ) {
    this.publicacion = "";
    this.textArea = false;
    this.numero = null;
    this.esCompartido = false;
    this.categorias = [];
    this.categoriaSeleccionada = "";
    this.cargando = false;
    this.esUsuarioPlus = false;
    this.esUsuarioPremiun = false;
    this.mostrarMensaje1 = false;
    this.mostrarMensaje2 = false;
  }
  ngOnInit(): void {
    this.cargarCategoria();
    this.dashboardService.textAreaEstaOculto(true);
    
  
  }


  async cargarChiste(): Promise<void> {
    this.cargando = true;
    this.publicacion = await this.chistesService.cargarChiste();
    this.esCompartido = true;
    this.cargando = false;
  }
  async cargarChistePorCategoria(categoria: string): Promise<void> {
    this.cargando = true;
    this.publicacion = await this.chistesService.cargarChistePorCategoria(categoria);
    this.esCompartido = true;
    this.cargando = false;
    this.categoriaSeleccionada = '';
  }
  async cargarCategoria() {
    const categoriasPremiun = await this.chistesService.cargarCategorias();
    const categoriasPlus = ['travel', 'movie'];
    if (this.authService.obtenerUsuario()?.rol === 'plus') {
      this.categorias = categoriasPremiun.filter(cat => categoriasPlus.includes(cat));
        this.esUsuarioPlus = true;
    } else {
      this.categorias = await this.chistesService.cargarCategorias();
      this.esUsuarioPremiun = true;
    }

  }
  compartir() {
    this.textoService.actualizarTexto(this.publicacion);
    this.dashboardService.activarNotificaciones();

  }
  limpiar() {
    this.numero = null;
    this.publicacion = "";
    this.esCompartido = false;
    this.categoriaSeleccionada = "";
  }
  ngOnDestroy(): void {
    this.dashboardService.textAreaEstaOculto(false);

  }
}
