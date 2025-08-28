# 📌 Componente `TablaPersonalizadaCrudComponent`

Este componente es una **tabla CRUD personalizada** en Angular que permite mostrar, buscar y editar registros dinámicamente, incluyendo paginación y filtrado.

---

## ✨ Características
- Mostrar u ocultar una **tabla con CRUD** mediante `@Input()`.  
- Buscar registros mediante un campo de búsqueda opcional (`buscador`).  
- Edición inline de los registros.  
- Eliminación de registros con botón de borrar.  
- Paginación integrada mediante `paginate`.  
- Emite eventos al componente padre cuando se borran o editan registros.
- Permite personalizar clases CSS de la tabla.

---

## 📂 Estructura del HTML
```html
<div class="cardShape shape1">
  <div class=" m-2 ">
    <h2 class="texShape m-2 text-center">{{titulo}}</h2>
    <div *ngIf="buscador">
      <button type="button" icon="pi pi-refresh" class="mb-2 mr-2" (click)="limpiarFiltro()"></button>
      <input placeholder="Buscar..." type="text" [(ngModel)]="filtro"/>
      <button type="button" icon="pi pi-search" class="mb-2 ml-2" (click)="ngOnChanges()"></button>
    </div>
  </div>
  <div *ngIf="datosFiltrados.length > 0">
    <table [class]="claseString">
      <thead>
        <tr>
          <ng-container *ngFor="let header of cabecera">
            <th>{{ header }}</th>
          </ng-container>
          <th *ngIf="botonBorrar || botonEditar">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of datosFiltrados | paginate: { itemsPerPage: numeroDeFilas, currentPage: paginaActual }; let i = index">
          <ng-container *ngFor="let propiedad of propiedadesAMostrar">
            <td class="trContenido">
              <input *ngIf="editandoIndex === i" [(ngModel)]="row[propiedad]" class="form-control" />
              <span *ngIf="editandoIndex !== i">{{ row[propiedad] }}</span>
            </td>
          </ng-container>
          <td *ngIf="botonBorrar || botonEditar">
            <div class="flex flex-wrap gap-3 justify-content-center">
              <button class="btn-rojo me-2" *ngIf="botonBorrar" (click)="borrar(i)">Borrar</button>
              <button class="btn-amarillo" *ngIf="botonEditar && editandoIndex !== i" (click)="activarEdicion(i)">Editar</button>
              <button class="btn-verde" *ngIf="botonEditar && editandoIndex === i" (click)="guardarEdicion(row)">Guardar</button>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="footer text-center" [attr.colSpan]="propiedadesAMostrar.length + 1">
            <pagination-controls (pageChange)="paginaActual = $event"></pagination-controls>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
  <div class="text-center" *ngIf="datosFiltrados.length === 0">
    <span>No hay datos guardados.</span>
  </div>
</div>
```

---

## 🛠️ Lógica del Componente
```ts
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
  @Input() tablaClase!: string[];
  @Input() cargando: boolean;
  @Input() buscador: boolean;
  @Input() botonBorrar: boolean;
  @Input() botonEditar: boolean;

  public paginaActual: number;
  public numeroDeFilas: number;
  public filtro: string;
  public datosFiltrados: any[];
  public claseString: string;
  public editandoIndex: number | null;

  constructor() {
    this.paginaActual = 1;
    this.numeroDeFilas = 3;
    this.filtro = '';
    this.datosFiltrados = [];
    this.claseString = '';
    this.propiedadesAMostrar = [];
    this.cargando = false;
    this.buscador = false;
    this.botonEditar = false;
    this.botonBorrar = false;
    this.editandoIndex = null;
  }

  ngOnInit(): void {
    if (this.datos !== null) {
      this.ngOnChanges();
    }
    if (this.tablaClase != null) {
      this.claseString = this.tablaClase.join(' ').replace(/,/g, ' ');
    }
  }

  public ngOnChanges() {
    this.aplicarFiltro();
  }

  public limpiarFiltro() {
    this.filtro = '';
    this.ngOnChanges();
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
    this.editarEmitido.emit(row);
  }

  borrar(index: number) {
    this.borrarEmitido.emit(this.datos[index]);
  }

  public editar(row: any) {
    this.editarEmitido.emit(row);
  }
}
```

---

## 📌 Propiedades

| Propiedad             | Tipo       | Descripción |
|----------------------|-----------|-------------|
| `cabecera`            | `string[]`| Encabezados de la tabla |
| `titulo`              | `string`  | Título de la tabla/modal |
| `datos`               | `any[]`   | Datos que se mostrarán en la tabla |
| `propiedadesAMostrar` | `string[]`| Campos de cada objeto a mostrar como columnas |
| `tablaClase`          | `string[]`| Clases CSS para la tabla |
| `cargando`            | `boolean` | Estado de carga opcional |
| `buscador`            | `boolean` | Activar campo de búsqueda |
| `botonBorrar`         | `boolean` | Mostrar botón de borrar |
| `botonEditar`         | `boolean` | Mostrar botón de editar |

---

## 📤 Eventos

| Evento            | Valor emitido | Descripción |
|------------------|---------------|-------------|
| `borrarEmitido`  | `any`         | Emite el registro que se desea borrar |
| `editarEmitido`  | `any`         | Emite el registro que se ha editado |

---

## 🎨 Estilos

- `.cardShape` y `.texShape`: estilos de la tarjeta y títulos.
- `.trContenido`: estilo de celdas.
- `.btn-rojo`, `.btn-amarillo`, `.btn-verde`: estilos para botones de acción.
- `.footer`: estilo del pie de tabla y paginación.

Ejemplo CSS simple:
```css
.cardShape { background: #fff; border-radius: 10px; padding:1rem; }
.trContenido { padding:0.5rem; }
.btn-rojo { background:red; }
.btn-amarillo { background:yellow; }
.btn-verde { background:green; }
```

