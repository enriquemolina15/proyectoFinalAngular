import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { MenuModule } from './components/menu/menu.module';
import { VistaEjercicioModule } from './components/vista-ejercicio/vista-ejercicio.module';
import { FooterModule } from './components/footer/footer.module';
import { StringModule } from './ejercicios/string/string.module';
import { DashboardStringComponent } from './dashboard/dashboard-string/dashboard-string.component';
import { DashboardNumberComponent } from './dashboard/dashboard-number/dashboard-number.component';
import { DashboardDragonballApiComponent } from './dashboard/dashboard-dragonball-api/dashboard-dragonball-api.component';
import { HttpClientModule } from '@angular/common/http';
import { DragonballApiModule } from './ejercicios/dragonball-api/dragonball-api.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './components/auth/auth.module';
import { DashboardStringModule } from './dashboard/dashboard-string/dashboard-string.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardStringComponent,
    DashboardNumberComponent,
    DashboardDragonballApiComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    MenuModule,
    VistaEjercicioModule,
    FooterModule,
    DashboardStringModule,
    DragonballApiModule,
    HttpClientModule,
    SharedModule,
    AuthModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
