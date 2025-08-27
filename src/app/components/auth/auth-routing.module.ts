import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoComponent } from './acceso/acceso.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ExtraviadoComponent } from './extraviado/extraviado.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';

const routes: Routes = [
  {path:'acceso',component:AccesoComponent},
  {path:'login',component:LoginComponent},
  {path:'error',component:ErrorComponent},
  {path:'extraviado',component:ExtraviadoComponent},
  {path:'registro',component:RegistroUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
