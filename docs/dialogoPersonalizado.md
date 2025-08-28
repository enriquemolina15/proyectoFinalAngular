# 📌 Componente `DialogoPersonalizadoComponent`

Este componente es un **diálogo/modal reutilizable** en Angular que permite mostrar contenido personalizado dentro de una ventana emergente.  
Incluye soporte para título, botones de cierre y la posibilidad de controlar su visibilidad desde el componente padre.

---

## ✨ Características
- Mostrar u ocultar un **diálogo modal** mediante `@Input()`.
- Personalizar el **título** de la ventana.
- Opción de mostrar/ocultar botones de cierre.
- Emisión de un evento al cerrar el diálogo.
- Soporte para **contenido dinámico** mediante `<ng-content>`.

---

## 📂 Estructura del HTML
```html
<div *ngIf="dialogoVisible" class="dialogo-overlay">
  <div class="cardShape shape1 position-relative">
    
    <!-- Botón de cierre (esquina superior) -->
    <button class="btn-close position-absolute top-0 end-0 m-2"
            (click)="closeDialog()"
            *ngIf="botonesCerrar">
    </button>

    <!-- Título -->
    <div class="text-center">
      <h2 class="texShape mb-0">{{ titulo }}</h2>
    </div>
    
    <!-- Contenido dinámico -->
    <div class="m-2">
      <ng-content></ng-content>
    </div>

    <!-- Botón de cierre inferior -->
    <div class="text-center">
      <button (click)="closeDialog()" class="btn btn-primary d-none d-sm-inline" *ngIf="botonesCerrar">
        Cerrar
      </button>
    </div>
  </div>
</div>
```

---

## 🛠️ Lógica del Componente
```ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialogo-personalizado',
  templateUrl: './dialogo-personalizado.component.html',
  styleUrls: ['./dialogo-personalizado.component.css']
})
export class DialogoPersonalizadoComponent {
  @Input() titulo!: string;                 // Texto del título del diálogo
  @Input() dialogoVisible!: boolean;        // Controla visibilidad del modal
  @Input() botonesCerrar: boolean;          // Activa/desactiva botones de cierre
  @Output() cambiarDialogoVisible = new EventEmitter<boolean>(); // Emite cambios de visibilidad

  constructor() {
    this.botonesCerrar = false; // Por defecto, botones de cierre desactivados
  }

  // Método que cierra el diálogo y notifica al componente padre
  closeDialog(): void {
    this.cambiarDialogoVisible.emit(false);
  }
}
```

---

## 📌 Uso en un Componente Padre
```html
<!-- Botón para abrir el diálogo -->
<button (click)="mostrarDialogo = true" class="btn btn-primary">
  Abrir diálogo
</button>

<!-- Uso del componente personalizado -->
<app-dialogo-personalizado
  [titulo]="'Título del diálogo'"
  [dialogoVisible]="mostrarDialogo"
  [botonesCerrar]="true"
  (cambiarDialogoVisible)="mostrarDialogo = $event">

  <!-- Contenido dinámico -->
  <p>Este es el contenido del modal.</p>
  <p>Puedes incluir texto, formularios o cualquier otro componente Angular.</p>
</app-dialogo-personalizado>
```

---

## 📊 Propiedades

| Propiedad         | Tipo      | Descripción |
|-------------------|----------|-------------|
| `titulo`          | `string` | Título que se muestra en el encabezado del diálogo. |
| `dialogoVisible`  | `boolean`| Controla si el diálogo está visible o no. |
| `botonesCerrar`   | `boolean`| Muestra u oculta los botones de cierre (`X` y botón inferior). |

---

## 📤 Eventos

| Evento                  | Valor emitido | Descripción |
|--------------------------|---------------|-------------|
| `cambiarDialogoVisible` | `boolean`     | Devuelve `false` cuando se cierra el diálogo. |

---

## 🎨 Estilos
En el archivo `dialogo-personalizado.component.css` puedes definir:
- `.dialogo-overlay`: fondo semitransparente para cubrir la pantalla.  
- `.cardShape`: estilo de la tarjeta/modal.  
- `.texShape`: estilo del título.  

Ejemplo simple:
```css
.dialogo-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
}

.cardShape {
  background: #fff;
  border-radius: 10px;
  padding: 1rem;
  min-width: 300px;
  max-width: 600px;
}
```

---

## ✅ Buenas prácticas
- Usar `*ngIf="dialogoVisible"` para no renderizar el modal cuando esté cerrado.  
- Usar `@Output()` para comunicar el cierre al padre y mantener el **control centralizado** de estado.  
- Personalizar el modal con CSS para integrarlo con tu aplicación.  

---
