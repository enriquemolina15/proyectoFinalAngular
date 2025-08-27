import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabla-personalizada-crud',
  templateUrl: './tabla-personalizada-crud.component.html',
  styleUrls: ['./tabla-personalizada-crud.component.css']
})
export class TablaPersonalizadaCrudComponent implements OnInit {
  @Output() borrarEmitido = new EventEmitter<any>();
  @Output() editarEmitido = new EventEmitter<any>();
 
  @Input() cabecera!: string[];
  @Input() titulo!: string;
  @Input() datos!: any[];
  @Input() propiedadesAMostrar: string[];
  @Input() tablaClase!: string[]; // para aplicar clases a la tabla
  @Input() cargando: boolean; // Recibir el estado de carga como entrada
  @Input() buscador: boolean; // Para tener un bucador de palabras
  @Input() botonBorrar: boolean; // Para visualizar el boton de borrar
  @Input() botonEditar: boolean; // Para visualizar el boton de edicion
  public paginaActual: number; // Página actual
  public numeroDeFilas: number; // Cantidad de elementos por página
  public filtro: string;
  public datosFiltrados: any[];
  public claseString: string;
  public editandoIndex:number | null;
  constructor(
  ) {
    this.paginaActual = 1;
    this.numeroDeFilas = 3;
    this.filtro = "";
    this.datosFiltrados = [];
    this.claseString = "";
    this.propiedadesAMostrar = [];
    this.cargando = false;
    this.buscador = false;
    this.botonEditar = false;
    this.botonBorrar = false;
    this.editandoIndex = null;
  }
  ngOnInit(): void {
    
    if (this.datos !== null) {
      this.ngOnChanges()
    }
    if (this.tablaClase != null) {
      // Convertir el array de strings en una sola cadena de texto
      const cadenaTexto: string = this.tablaClase.join(" ");
      // Sustituir las comas por espacios en la cadena de texto
      this.claseString = cadenaTexto.replace(/,/g, " ");

    }
  }
  public ngOnChanges() {
    this.aplicarFiltro();
  }
  public limpiarFiltro() {
    this.filtro = "";
    this.ngOnChanges()
  }

  public aplicarFiltro(): void {
    if (!this.filtro || !Array.isArray(this.datos)) {
      this.datosFiltrados = this.datos;
    } else {
      this.datosFiltrados = this.datos.filter((row: any) =>
        this.propiedadesAMostrar.some((propiedad: string) =>
          row[propiedad]?.toString().toLowerCase().includes(this.filtro.toLowerCase())
        )
      );
    }
  }
  
   activarEdicion(index: number) {
    this.editandoIndex = index;
  }

  guardarEdicion(row: any) {
    this.editandoIndex = null;
    this.editarEmitido.emit(row); // Envía el registro editado al padre
  }

  borrar(index: number) {
    this.borrarEmitido.emit(this.datos[index]); // Envía el registro al padre
  }

  public editar(row: any) {
    this.editarEmitido.emit(row);
  }

}
