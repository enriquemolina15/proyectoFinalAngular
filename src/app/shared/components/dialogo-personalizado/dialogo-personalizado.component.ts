import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialogo-personalizado',
  templateUrl: './dialogo-personalizado.component.html',
  styleUrls: ['./dialogo-personalizado.component.css']
})
export class DialogoPersonalizadoComponent {
@Input() titulo!: string;
  @Input() dialogoVisible!: boolean;
  @Input() botonesCerrar: boolean;
  @Output() cambiarDialogoVisible = new EventEmitter<boolean>();
  constructor() {
    this.botonesCerrar = false;
  }

  closeDialog(): void {
    this.cambiarDialogoVisible.emit(false);
  }
}
