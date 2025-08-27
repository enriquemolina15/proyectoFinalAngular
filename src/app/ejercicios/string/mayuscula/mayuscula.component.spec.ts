import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayusculaComponent } from './mayuscula.component';

describe('MayusculaComponent', () => {
  let component: MayusculaComponent;
  let fixture: ComponentFixture<MayusculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MayusculaComponent]
    });
    fixture = TestBed.createComponent(MayusculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
