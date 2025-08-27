import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoPersonalizadoComponent } from './dialogo-personalizado.component';

describe('DialogoPersonalizadoComponent', () => {
  let component: DialogoPersonalizadoComponent;
  let fixture: ComponentFixture<DialogoPersonalizadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogoPersonalizadoComponent]
    });
    fixture = TestBed.createComponent(DialogoPersonalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
