import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEjercicioComponent } from './vista-ejercicio.component';

describe('VistaEjercicioComponent', () => {
  let component: VistaEjercicioComponent;
  let fixture: ComponentFixture<VistaEjercicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaEjercicioComponent]
    });
    fixture = TestBed.createComponent(VistaEjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
