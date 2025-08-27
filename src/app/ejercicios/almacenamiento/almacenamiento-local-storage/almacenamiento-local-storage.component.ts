import { Component } from '@angular/core';
import { LocalStorageService } from '../service/local-storage.service';
import { AuthService } from 'src/app/components/auth/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-almacenamiento-local-storage',
  templateUrl: './almacenamiento-local-storage.component.html',
  styleUrls: ['./almacenamiento-local-storage.component.css']
})
export class AlmacenamientoLocalStorageComponent {
 public llave: string;
  public valor: string;
  public locales: { llave: string, valor: string }[];
  constructor(
    private localStorageService: LocalStorageService,
    private authService:AuthService,
    private router:Router
  ) {
    this.llave = '';
    this.valor = '';
    this.locales = [];
  }
  ngOnInit(): void {
    this.comprobarUsuario();
  }
  comprobarUsuario(){
    if(this.authService.obtenerNombreUsuario() == "administrador"){
      this.cargarLocalStorage();
    }else{
        this.router.navigate(['./error']);
    }

  }
  guardarLocalStorage(): void {
    if (!this.llave.trim() || !this.valor.trim()) return;
    this.localStorageService.setLocal(this.llave, this.valor);
    this.resetFormulario();
    this.cargarLocalStorage();
  }
  cargarLocalStorage() {
    this.locales = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const valor = localStorage.getItem(key);
        this.locales.push({ llave: key, valor: valor ?? '' });
      }
    }
  }
  borrarlocalStorage(row:any): void {
    console.log('Ooo: ',row);
    
    this.localStorageService.deleteLocal(row.llave)
    this.cargarLocalStorage();
  
  }
async editarLocalStorage(dato: any) {
      this.localStorageService.setLocal(dato.llave, dato.valor);
    }
  
  private resetFormulario(): void {
    this.llave = '';
    this.valor = '';
  }

}
