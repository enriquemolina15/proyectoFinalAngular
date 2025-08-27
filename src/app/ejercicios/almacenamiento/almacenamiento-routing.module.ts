import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlmacenamientoCookieComponent } from './almacenamiento-cookie/almacenamiento-cookie.component';
import { AlmacenamientoLocalStorageComponent } from './almacenamiento-local-storage/almacenamiento-local-storage.component';
import { AlmacenamientoSessionStorageComponent } from './almacenamiento-session-storage/almacenamiento-session-storage.component';
import { AlmacenamientoIndexedDBComponent } from './almacenamiento-indexed-db/almacenamiento-indexed-db.component';

const routes: Routes = [
  {path:'almacenamiento-cookie',component:AlmacenamientoCookieComponent},
  {path:'almacenamiento-localStorage',component:AlmacenamientoLocalStorageComponent},
  {path:'almacenamiento-sessionStorage',component:AlmacenamientoSessionStorageComponent},
  {path:'almacenamiento-indexedDB',component:AlmacenamientoIndexedDBComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlmacenamientoRoutingModule { }
