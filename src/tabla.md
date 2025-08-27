# Tabla Personalizada Componente

El componente `TablaPersonalizadaComponent` es una tabla altamente personalizable para mostrar datos tabulares en aplicaciones Angular. Proporciona funcionalidades como filtrado, paginación y acciones personalizadas para cada fila.

## Uso

### Importación del Módulo

Asegúrate de importar el módulo `TablaPersonalizadaModule` en el módulo de tu aplicación donde planeas usar la tabla personalizada:

```typescript
import { TablaPersonalizadaModule } from 'ruta/a/tabla-personalizada.module';

@NgModule({
  imports: [
    // Otros módulos importados...
    TablaPersonalizadaModule
  ],
  // Otros metadatos del módulo...
})
export class AppModule { }
```

### Utilización del Componente

Utiliza el componente `app-tabla-personalizada` en tu plantilla HTML y proporciona los datos y opciones necesarios a través de las entradas (inputs).

```html
<app-tabla-personalizada
  [cabecera]="['Nombre', 'Edad', 'Email']"
  [datos]="usuarios"
  [propiedadesAMostrar]="['name', 'age', 'email']"
  [buscador]="true"
  [botonBorrar]="true"
  [botonEditar]="true"
  (borrarEmitido)="borrarUsuario($event)"
  (editarEmitido)="editarUsuario($event)"
></app-tabla-personalizada>
```

## Entradas (Inputs)

- `cabecera`: Un array de strings que representa los encabezados de las columnas.
- `datos`: Un array de objetos que representa los datos a mostrar en la tabla.
- `propiedadesAMostrar`: Un array de strings que representa las propiedades de los objetos en `data` que se mostrarán en cada fila.
- `buscador`: Un booleano para habilitar o deshabilitar la funcionalidad de búsqueda.
- `botonBorrar`, `botonEditar`: Booleanos para controlar la visibilidad de los botones de acción para eliminar y editar respectivamente.

## Salidas (Outputs)

- `borrarAvisoEmitido`: Se emite cuando se hace clic en el botón de eliminar, proporcionando el ID del elemento a eliminar.
- `editarAvisoEmitido`: Se emite cuando se hace clic en el botón de editar, proporcionando el ID del elemento a editar.

## Personalización Adicional

Para personalizar la apariencia de la tabla, puedes proporcionar clases CSS a través de la entrada `tablaClase`.
