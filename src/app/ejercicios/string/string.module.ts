import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayusculaComponent } from './mayuscula/mayuscula.component';
import { MinusculaComponent } from './minuscula/minuscula.component';
import { AleatorioComponent } from './aleatorio/aleatorio.component';
import { ApiChuckNorrisComponent } from './api-chuck-norris/api-chuck-norris.component';
import { ApiJsonplaceholderComponent } from './api-jsonplaceholder/api-jsonplaceholder.component';
import { FormsModule } from '@angular/forms';
import { StringRoutingModule } from './string-routing.module';
import { AutomaticoComponent } from './automatico/automatico.component';



@NgModule({
  declarations: [
    MayusculaComponent,
    MinusculaComponent,
    AleatorioComponent,
    ApiChuckNorrisComponent,
    ApiJsonplaceholderComponent,
    AutomaticoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StringRoutingModule
  ]
})
export class StringModule { }
