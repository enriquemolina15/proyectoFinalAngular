import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraviadoComponent } from './extraviado.component';

describe('ExtraviadoComponent', () => {
  let component: ExtraviadoComponent;
  let fixture: ComponentFixture<ExtraviadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtraviadoComponent]
    });
    fixture = TestBed.createComponent(ExtraviadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
