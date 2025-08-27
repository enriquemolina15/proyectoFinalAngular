import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCalculadoraComponent } from './mini-calculadora.component';

describe('MiniCalculadoraComponent', () => {
  let component: MiniCalculadoraComponent;
  let fixture: ComponentFixture<MiniCalculadoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniCalculadoraComponent]
    });
    fixture = TestBed.createComponent(MiniCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
