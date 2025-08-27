import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPersonajesComponent } from './personajes/listado-personajes/listado-personajes.component';
import { ListadoPlanetasComponent } from './planetas/listado-planetas/listado-planetas.component';

const routes: Routes = [
  {path:'listadoPersonajes',component:ListadoPersonajesComponent},
  {path:'listadoPlanetas',component:ListadoPlanetasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragonballApiRoutingModule { }
