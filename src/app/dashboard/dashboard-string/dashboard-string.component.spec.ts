import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStringComponent } from './dashboard-string.component';

describe('DashboardStringComponent', () => {
  let component: DashboardStringComponent;
  let fixture: ComponentFixture<DashboardStringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardStringComponent]
    });
    fixture = TestBed.createComponent(DashboardStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
