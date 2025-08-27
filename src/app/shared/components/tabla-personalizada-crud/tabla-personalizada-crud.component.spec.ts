import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPersonalizadaCrudComponent } from './tabla-personalizada-crud.component';

describe('TablaPersonalizadaCrudComponent', () => {
  let component: TablaPersonalizadaCrudComponent;
  let fixture: ComponentFixture<TablaPersonalizadaCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaPersonalizadaCrudComponent]
    });
    fixture = TestBed.createComponent(TablaPersonalizadaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
