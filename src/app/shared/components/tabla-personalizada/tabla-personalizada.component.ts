import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabla-personalizada',
  templateUrl: './tabla-personalizada.component.html',
  styleUrls: ['./tabla-personalizada.component.css']
})
export class TablaPersonalizadaComponent implements OnInit {
  @Input() cabecera!: string[];
  @Input() titulo1!: string;
  @Input() titulo2!: string;
  @Input() datos!: any[];
  @Input() propiedadesAMostrar: string[];
  @Input() tablaClase!: string[]; // para aplicar clases a la tabla
  @Input() tablaVisible!: boolean;
  @Output() cambiarTablaVisible = new EventEmitter<boolean>();
  public listaDatos: any[];
  public claseString: string;

  constructor(
  ) {
    this.listaDatos = [];
    this.claseString = "";
    this.propiedadesAMostrar = [];
  }
  ngOnInit(): void {
    this.cargarTabla();
    if (this.tablaClase != null) {
      // Convertir el array de strings en una sola cadena de texto
      const cadenaTexto: string = this.tablaClase.join(" ");
      // Sustituir las comas por espacios en la cadena de texto
      this.claseString = cadenaTexto.replace(/,/g, " ");

    }
  }

  public cargarTabla(): void {
    this.listaDatos = this.datos;
  }
  closeTabla(): void {
    this.cambiarTablaVisible.emit(false);
  }







}
