import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNumberComponent } from './dashboard-number.component';

describe('DashboardNumberComponent', () => {
  let component: DashboardNumberComponent;
  let fixture: ComponentFixture<DashboardNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardNumberComponent]
    });
    fixture = TestBed.createComponent(DashboardNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
