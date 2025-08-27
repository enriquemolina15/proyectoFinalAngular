import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit{
  public nombre:string;
  public clave:string;
  public rol:string;
  public mensaje:string;
  public accederVisible:boolean;
  public dialogoVisible:boolean;
  public mostrarClave: boolean;

  constructor(
    private authService: AuthService, private router: Router
  ) { 
    this.nombre = '';
    this.clave = '';
    this.mensaje = '';
    this.rol = '';
    this.accederVisible = false;
    this.dialogoVisible = false;
    this.mostrarClave = false;
    
  }
  ngOnInit(): void {
    this.dialogoVisible=  this.usuarioExistente()
  }

  usuarioExistente(){
    if(this.authService.obtenerUsuario() !== null) return true;
    return false;
    
  }
  
  registrar() {
     this.dialogoVisible=  this.usuarioExistente()
    if (this.nombre && this.clave) {
      this.authService.registrar(this.nombre, this.clave,this.rol);
      this.mensaje = '✅ Usuario registrado correctamente';
      // Redirigir después de 2 segundos
      setTimeout(() => {
        this.router.navigate(['/login'], { queryParams: { registrado: 'true' } });
      }, 500);
    }else{
      
        this.mensaje = '❌ Usuario o contraseña imcompletos.';
    }
  }
  PackRegistro(rol:string){
     this.dialogoVisible=  this.usuarioExistente()
    this.rol = rol;
    this.accederVisible = true;
  }
  
  volverInicio() {
    this.router.navigate(['']);
  }
  
  cerrarSesion(){
    this.authService.logout()
    this.dialogoVisible = false;
  }
}

