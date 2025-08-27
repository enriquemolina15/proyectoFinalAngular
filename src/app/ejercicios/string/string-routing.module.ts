import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MinusculaComponent } from "./minuscula/minuscula.component";
import { AleatorioComponent } from "./aleatorio/aleatorio.component";
import { MayusculaComponent } from "./mayuscula/mayuscula.component";
import { AutomaticoComponent } from "./automatico/automatico.component";
import { ApiChuckNorrisComponent } from "./api-chuck-norris/api-chuck-norris.component";
import { ApiJsonplaceholderComponent } from "./api-jsonplaceholder/api-jsonplaceholder.component";
import { AuthGuard } from "src/app/components/auth/guard/auth.guard";
const routes: Routes = [
    { path: 'mayusculas', component: MayusculaComponent},
    { path: 'minusculas', component: MinusculaComponent,canActivate: [AuthGuard],data: { rolesPermitidos: ['basico','plus','premiun']  } },
    { path: 'aleatorio', component: AleatorioComponent,canActivate: [AuthGuard],data: { rolesPermitidos: ['basico','plus','premiun']  }  },
    { path: 'automatico',component:AutomaticoComponent,canActivate: [AuthGuard],data: { rolesPermitidos: ['plus','premiun']  }},
    { path: 'jsonplaceholder',component:ApiJsonplaceholderComponent,canActivate: [AuthGuard],data: { rolesPermitidos: ['plus','premiun']  }},
    { path: 'chistes',component:ApiChuckNorrisComponent,canActivate: [AuthGuard],data: { rolesPermitidos: ['plus','premiun']  }}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StringRoutingModule { }
