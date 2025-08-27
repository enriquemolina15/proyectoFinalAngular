import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiJsonplaceholderComponent } from './api-jsonplaceholder.component';

describe('ApiJsonplaceholderComponent', () => {
  let component: ApiJsonplaceholderComponent;
  let fixture: ComponentFixture<ApiJsonplaceholderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiJsonplaceholderComponent]
    });
    fixture = TestBed.createComponent(ApiJsonplaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
