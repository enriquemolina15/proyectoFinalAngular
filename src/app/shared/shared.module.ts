import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogoPersonalizadoComponent } from './components/dialogo-personalizado/dialogo-personalizado.component';
import { TablaPersonalizadaComponent } from './components/tabla-personalizada/tabla-personalizada.component';
import { TablaPersonalizadaCrudComponent } from './components/tabla-personalizada-crud/tabla-personalizada-crud.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    DialogoPersonalizadoComponent,
    TablaPersonalizadaComponent,
    TablaPersonalizadaCrudComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [
    DialogoPersonalizadoComponent,
    TablaPersonalizadaComponent,
    TablaPersonalizadaCrudComponent,
    FormsModule,
    NgxPaginationModule
  ]
})
export class SharedModule { }
