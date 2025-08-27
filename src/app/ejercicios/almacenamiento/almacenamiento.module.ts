import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlmacenamientoRoutingModule } from './almacenamiento-routing.module';
import { FormsModule } from '@angular/forms';
import { TablaPersonalizadaCrudComponent } from 'src/app/shared/components/tabla-personalizada-crud/tabla-personalizada-crud.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AlmacenamientoCookieComponent } from './almacenamiento-cookie/almacenamiento-cookie.component';
import { AlmacenamientoLocalStorageComponent } from './almacenamiento-local-storage/almacenamiento-local-storage.component';
import { AlmacenamientoSessionStorageComponent } from './almacenamiento-session-storage/almacenamiento-session-storage.component';
import { AlmacenamientoIndexedDBComponent } from './almacenamiento-indexed-db/almacenamiento-indexed-db.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AlmacenamientoCookieComponent,
    AlmacenamientoLocalStorageComponent,
    AlmacenamientoSessionStorageComponent,
    AlmacenamientoIndexedDBComponent
  ],
  imports: [
    CommonModule,
    AlmacenamientoRoutingModule,
     SharedModule
  ]
})
export class AlmacenamientoModule { }
