import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaEjercicioComponent } from './components/vista-ejercicio/vista-ejercicio.component';
import { DashboardStringComponent } from './dashboard/dashboard-string/dashboard-string.component';
import { DashboardNumberComponent } from './dashboard/dashboard-number/dashboard-number.component';
import { DashboardDragonballApiComponent } from './dashboard/dashboard-dragonball-api/dashboard-dragonball-api.component';
import { PersonajeComponent } from './ejercicios/dragonball-api/personajes/personaje/personaje.component';
import { PlanetaComponent } from './ejercicios/dragonball-api/planetas/planeta/planeta.component';
import { AuthGuard } from './components/auth/guard/auth.guard';

const routes: Routes = [
  { path: '', component: VistaEjercicioComponent },
  { path: 'auth', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule) },
  {
    path: 'dashboard-string', component: DashboardStringComponent,
    children: [
      { path: 'string', loadChildren: () => import('./ejercicios/string/string.module').then(m => m.StringModule) },

    ]
  },
  {
    path: 'dashboard-number', component: DashboardNumberComponent,
    children: [
      { path: 'number', loadChildren: () => import('./ejercicios/number/number.module').then(m => m.NumberModule)

      },
    ]
  },
  {
    path: 'dashboard-dragonball', component: DashboardDragonballApiComponent, canActivate: [AuthGuard], data: { rolesPermitidos: ['plus','premiun'] },
    children: [
      { path: 'dragonball', loadChildren: () => import('./ejercicios/dragonball-api/dragonball-api.module').then(m => m.DragonballApiModule) }
    ]
  },
  { path: 'personajes-dragonball', component: PersonajeComponent, canActivate: [AuthGuard],  data: { rolesPermitidos: ['premiun'] }},
  { path: 'planetas-dragonball', component: PlanetaComponent, canActivate: [AuthGuard], data: { rolesPermitidos: ['premiun'] } },
  { path: 'almacenamiento', loadChildren: () => import('./ejercicios/almacenamiento/almacenamiento.module').then(m => m.AlmacenamientoModule), canActivate: [AuthGuard],data: { rolesPermitidos: ['premiun'] } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
