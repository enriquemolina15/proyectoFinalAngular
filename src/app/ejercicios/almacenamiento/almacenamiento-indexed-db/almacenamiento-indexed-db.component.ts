import { Component, OnInit } from '@angular/core';
import { IndexedDBService } from '../service/indexed-db.service';

@Component({
  selector: 'app-almacenamiento-indexed-db',
  templateUrl: './almacenamiento-indexed-db.component.html',
  styleUrls: ['./almacenamiento-indexed-db.component.css']
})
export class AlmacenamientoIndexedDBComponent implements OnInit {
  public valor: string;
  public nombre: string;
  public datosIndexedDB: { id: number, nombre: string, valor: string }[];
  private dbName: string;
  private storeName: string;
  public editIndex: number | null;
  public editNombre: string;
  public editValor: string;
  constructor(
    private indexedDBService: IndexedDBService
  ) {
    this.valor = '';
    this.nombre = '';
    this.datosIndexedDB = [];
    this.dbName = 'MiBD';
    this.storeName = 'MiStore';
    this.editIndex = null;
    this.editNombre = '';
    this.editValor = '';
  }
  ngOnInit(): void {
    this.cargarIndexedDB();
  }
  async guardarIndexedDB() {
    if (!this.nombre.trim() ||!this.valor.trim()) return;
    await this.indexedDBService.setIndexedDB(
      this.dbName,
      this.storeName,
      {nombre:this.nombre, valor: this.valor }
    );
    this.cargarIndexedDB();
    this.resetFormulario();
  }
  

  async cargarIndexedDB() {
    this.datosIndexedDB = await this.indexedDBService.getAllIndexedDB('MiBD', 'MiStore');
    console.log('guardado: ',this.datosIndexedDB[this.datosIndexedDB.length -1]);
    
  }
  
  async editarDato(row: any) {
  await this.indexedDBService.setIndexedDB('MiBD', 'MiStore', row, row.id);
  this.cargarIndexedDB(); 
}
async borrarDato(row: any) {
  
  if (!row.id) {
    console.error('No hay ID para borrar', row.id);
    return;
  }
  await this.indexedDBService.deleteIndexedDB(this.dbName, this.storeName, row.id);
  this.cargarIndexedDB();
}

  

  async guardarEdicion() {
    if (this.editIndex === null) return;

    const item = this.datosIndexedDB[this.editIndex];
    await this.indexedDBService.setIndexedDB(
      'MiBD',
      'MiStore',
      { nombre: this.editNombre, valor: this.editValor },
      item.id
    );

    this.editIndex = null;
    this.cargarIndexedDB();
  }
  cancelarEdicion() {
    this.editIndex = null;
  }
  private resetFormulario(): void {
    this.valor = '';
    this.nombre = '';
  }

}