# 📌 Componente `TablaPersonalizadaComponent`

Este componente es una **tabla/modal personalizada** en Angular que permite mostrar datos dinámicos en forma de tabla dentro de una ventana emergente.

---

## ✨ Características
- Mostrar u ocultar una **tabla modal** mediante `@Input()`.
- Personalizar los títulos (`titulo1`, `titulo2`).
- Configurar las **columnas y filas** dinámicamente a través de `cabecera` y `propiedadesAMostrar`.
- Soporte para mostrar imágenes dentro de las celdas.
- Emisión de un evento al cerrar la tabla.
- Posibilidad de aplicar clases CSS personalizadas a la tabla.

---

## 📂 Estructura del HTML
```html
<div class="tabla-overlay">
    <div class="cardShape shape1">
        <div class="m-2 row align-items-center">
            <div class="col-auto">
                <button class="custom-close-button d-none d-md-inline" (click)="closeTabla()">
                    <span class="custom-x-icon">X</span>
                </button>
            </div>
            <div class="col text-center">
                <h2 class="texShape mb-0">{{ titulo1 }}</h2>
            </div>
            <div class="col-auto text-end">
                <button (click)="closeTabla()" class="btn btn-primary d-none d-sm-inline">Cerrar</button>
            </div>
        </div>
        <div class="m-2">
            <h2 class="texShape m-2 text-center">{{titulo2}}</h2>
            <div>
                <table [class]="claseString">
                    <thead>
                        <tr>
                            <ng-container *ngFor="let header of cabecera">
                                <th>{{ header }}</th>
                            </ng-container>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="let row of listaDatos">
                            <ng-container *ngFor="let propiedad of propiedadesAMostrar">
                                <td class="trContenido texto-centrado ">
                                    <ng-container *ngIf="propiedad === 'imagen'; else textoNormal">
                                        <img class="imagen-flotante" [src]="row[propiedad]" alt="imagen">
                                    </ng-container>
                                    <ng-template #textoNormal>
                                        {{ row[propiedad] }}
                                    </ng-template>
                                </td>
                            </ng-container>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
```

---

## 🛠️ Lógica del Componente
```ts
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
  @Input() tablaClase!: string[];           
  @Input() tablaVisible!: boolean;          
  @Output() cambiarTablaVisible = new EventEmitter<boolean>(); 

  public listaDatos: any[];                  
  public claseString: string;                

  constructor() {
    this.listaDatos = [];
    this.claseString = "";
    this.propiedadesAMostrar = [];
  }

  ngOnInit(): void {
    this.cargarTabla();
    if (this.tablaClase != null) {
      this.claseString = this.tablaClase.join(" ").replace(/,/g, " ");
    }
  }

  public cargarTabla(): void {
    this.listaDatos = this.datos;
  }

  closeTabla(): void {
    this.cambiarTablaVisible.emit(false);
  }
}
```

---

## 📌 Uso en un Componente Padre
```html
<button (click)="mostrarTabla = true" class="btn btn-primary">Abrir Tabla</button>

<app-tabla-personalizada
  [titulo1]="'Tabla de Usuarios'"
  [titulo2]="'Listado Completo'"
  [cabecera]="['ID', 'Nombre', 'Imagen']"
  [datos]="usuarios"
  [propiedadesAMostrar]="['id','nombre','imagen']"
  [tablaClase]="['table','table-striped','table-bordered']"
  [tablaVisible]="mostrarTabla"
  (cambiarTablaVisible)="mostrarTabla = $event">
</app-tabla-personalizada>
```

---

## 📊 Propiedades

| Propiedad            | Tipo       | Descripción |
|---------------------|-----------|-------------|
| `cabecera`           | `string[]`| Encabezados de la tabla |
| `titulo1`            | `string`  | Título principal de la tarjeta/modal |
| `titulo2`            | `string`  | Título de la tabla |
| `datos`              | `any[]`   | Datos que se mostrarán en la tabla |
| `propiedadesAMostrar`| `string[]`| Campos de cada objeto a mostrar como columnas |
| `tablaClase`         | `string[]`| Clases CSS para la tabla |
| `tablaVisible`       | `boolean` | Controla la visibilidad del modal |

---

## 📤 Eventos

| Evento                  | Valor emitido | Descripción |
|-------------------------|---------------|-------------|
| `cambiarTablaVisible`  | `boolean`     | Devuelve `false` cuando se cierra la tabla |

---

## 🎨 Estilos

- `.tabla-overlay`: fondo semitransparente para cubrir la pantalla.
- `.cardShape`: estilo de la tarjeta/modal.
- `.texShape`: estilo de títulos.
- `.imagen-flotante`: estilo de imágenes dentro de la tabla.

Ejemplo CSS simple:
```css
.tabla-overlay {
  position: fixed;
  top:0; left:0;
  width:100%; height:100%;
  background: rgba(0,0,0,0.6);
  display:flex;
  align-items:center;
  justify-content:center;
  z-index:1050;
}
.cardShape {
  background: #fff;
  border-radius: 10px;
  padding:1rem;
  min-width:300px;
  max-width:800px;
}
```