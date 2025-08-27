import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { MiniCalculadoraComponent } from './mini-calculadora/mini-calculadora.component';
import { AuthGuard } from 'src/app/components/auth/guard/auth.guard';

const routes: Routes = [
  {path:'calculadora',component:CalculadoraComponent, canActivate: [AuthGuard],data: { 'rolesPermitidos': ['basico','plus','premiun']  }},
  {path:'mini-calculadora',component:MiniCalculadoraComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NumberRoutingModule { }
