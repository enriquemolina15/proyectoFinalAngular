import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-extraviado',
  templateUrl: './extraviado.component.html',
  styleUrls: ['./extraviado.component.css']
})
export class ExtraviadoComponent {
    @Input() mensaje: string = 'Has intentado iniciar sesión demasiadas veces.';
  @Output() volver = new EventEmitter<void>();
 constructor(
    private router:Router
  ){}
   volverLogin() {
    this.volver.emit();
  }
  acceder(direccion:string){
     this.router.navigate([direccion]);
  }

}
