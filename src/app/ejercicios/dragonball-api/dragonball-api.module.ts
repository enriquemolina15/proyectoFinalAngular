import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragonballApiRoutingModule } from './dragonball-api-routing.module';
import { ListadoPlanetasComponent } from './planetas/listado-planetas/listado-planetas.component';
import { PlanetaComponent } from './planetas/planeta/planeta.component';
import { ListadoPersonajesComponent } from './personajes/listado-personajes/listado-personajes.component';
import { PersonajeComponent } from './personajes/personaje/personaje.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListadoPlanetasComponent,
    PlanetaComponent,
    ListadoPersonajesComponent,
    PersonajeComponent,
  ],
  imports: [
    CommonModule,
    DragonballApiRoutingModule,
    SharedModule
     
  ],
   exports: [  
    ListadoPersonajesComponent
  ]
})
export class DragonballApiModule { }
