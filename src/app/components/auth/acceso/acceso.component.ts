import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent {
  constructor(
    private router:Router
  ){

  }
  acceder(direccion:string){
     this.router.navigate([direccion]);
  }

}
