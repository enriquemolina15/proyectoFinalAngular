import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AccesoComponent } from './acceso/acceso.component';
import { ErrorComponent } from './error/error.component';
import { ExtraviadoComponent } from './extraviado/extraviado.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
  declarations: [
    LoginComponent,
    AccesoComponent,
    ErrorComponent,
    ExtraviadoComponent,
    RegistroUsuarioComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    SharedModule
]
})
export class AuthModule { }
