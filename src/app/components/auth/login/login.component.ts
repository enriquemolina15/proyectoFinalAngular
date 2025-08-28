import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public nombre: string;
  public clave: string;
  public mensaje: string;
   public dialogoVisible:boolean
  public procesoLogin: boolean;
  public mostrarClave:boolean;
  public intentosFallidos: number;

  constructor(
    private router: Router,
    private authService: AuthService,
    private route:ActivatedRoute
  ) {
    this.nombre = "";
    this.clave = "";
    this.mensaje = "";
    this.procesoLogin = false;
    this.dialogoVisible = false;
    this.mostrarClave = false;
    this.intentosFallidos = 0;
  }

  ngOnInit(): void {
    this.comprobar();
  }
  comprobar(){
    this.route.queryParams.subscribe(params => {
      if (params['registrado'] === 'true') {
        this.dialogoVisible = false
      }else{
        this.dialogoVisible = this.usuarioExistente()

      }
    });
  }
  
login() {
    const correcto = this.authService.login(this.nombre, this.clave);
    if (correcto) {
      this.mensaje = '';
      this.router.navigate(['']); 
      this.intentosFallidos = 0;
      this.authService.estaLogueado(true);
    } else {
      this.intentosFallidos++;
      this.mensaje = '❌ Usuario o contraseña incorrectos.';
    }
  }
  resetLogin() {
  this.intentosFallidos = 0;
  this.nombre = '';
  this.clave = '';
  this.mensaje = '';
}
 usuarioExistente(){
    if(this.authService.obtenerUsuario() !== null) return true;
    return false;
    
  }
   volverInicio() {
    this.router.navigate(['']);
  }
  irRegistro() {
    this.router.navigate(['registro']);
  }
  
}
