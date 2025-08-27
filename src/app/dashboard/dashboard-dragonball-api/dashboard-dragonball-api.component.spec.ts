import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDragonballApiComponent } from './dashboard-dragonball-api.component';

describe('DashboardDragonballApiComponent', () => {
  let component: DashboardDragonballApiComponent;
  let fixture: ComponentFixture<DashboardDragonballApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardDragonballApiComponent]
    });
    fixture = TestBed.createComponent(DashboardDragonballApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
