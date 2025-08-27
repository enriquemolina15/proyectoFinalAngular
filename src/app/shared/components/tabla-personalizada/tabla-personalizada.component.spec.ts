import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPersonalizadaComponent } from './tabla-personalizada.component';

describe('TablaPersonalizadaComponent', () => {
  let component: TablaPersonalizadaComponent;
  let fixture: ComponentFixture<TablaPersonalizadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaPersonalizadaComponent]
    });
    fixture = TestBed.createComponent(TablaPersonalizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
