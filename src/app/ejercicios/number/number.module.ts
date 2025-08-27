import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberRoutingModule } from './number-routing.module';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { MiniCalculadoraComponent } from './mini-calculadora/mini-calculadora.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CalculadoraComponent,
    MiniCalculadoraComponent
  ],
  imports: [
    CommonModule,
    NumberRoutingModule,
    FormsModule
  ]
})
export class NumberModule { }
