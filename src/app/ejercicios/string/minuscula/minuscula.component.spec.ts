import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinusculaComponent } from './minuscula.component';

describe('MinusculaComponent', () => {
  let component: MinusculaComponent;
  let fixture: ComponentFixture<MinusculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinusculaComponent]
    });
    fixture = TestBed.createComponent(MinusculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
