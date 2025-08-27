import { Component } from '@angular/core';
import { SessionStorageService } from '../service/session-storage.service';

@Component({
  selector: 'app-almacenamiento-session-storage',
  templateUrl: './almacenamiento-session-storage.component.html',
  styleUrls: ['./almacenamiento-session-storage.component.css']
})
export class AlmacenamientoSessionStorageComponent {
  public llave: string;
  public valor: string;
  public sesiones: { llave: string, valor: string }[];
  constructor(
    private sessionStorageService: SessionStorageService
  ) {
    this.llave = '';
    this.valor = '';
    this.sesiones = [];
  }
  ngOnInit(): void {
    this.cargarSessionStorage();
  }
  guardarSessionStorage(): void {
    if (!this.llave.trim() || !this.valor.trim()) return;
    this.sessionStorageService.setSession(this.llave, this.valor);
    this.resetFormulario();
    this.cargarSessionStorage();
  }
  cargarSessionStorage() {
    this.sesiones = [];
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      if (key) {
        const valor = sessionStorage.getItem(key);
        this.sesiones.push({ llave: key, valor: valor ?? '' });
      }
    }
  }
  borrarSessionStorage(row: any): void {

    this.sessionStorageService.deleteSession(row.llave)
    this.cargarSessionStorage();

  }
  async editarSessionStorage(dato: any) {
    this.sessionStorageService.setSession(dato.llave, dato.valor);
  }

  private resetFormulario(): void {
    this.llave = '';
    this.valor = '';
  }

}
