import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-number',
  templateUrl: './dashboard-number.component.html',
  styleUrls: ['./dashboard-number.component.css']
})
export class DashboardNumberComponent {
  @ViewChild(RouterOutlet) outlet!: RouterOutlet;
  estaOcultaTarjeta!: boolean;
  constructor(
     private cd: ChangeDetectorRef
  ){}
  ngAfterViewInit() {
  if (this.outlet && this.outlet.isActivated) {
    this.estaOcultaTarjeta = true;
  } else {
    this.estaOcultaTarjeta = false;
  }
  this.cd.detectChanges();

  this.outlet.activateEvents.subscribe(() => {
    this.estaOcultaTarjeta = true;
    this.cd.detectChanges();
  });

  this.outlet.deactivateEvents.subscribe(() => {
    this.estaOcultaTarjeta = false;
    this.cd.detectChanges();
  });
}


}
