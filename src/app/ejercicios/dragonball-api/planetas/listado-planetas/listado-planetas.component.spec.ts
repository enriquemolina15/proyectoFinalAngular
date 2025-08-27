import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPlanetasComponent } from './listado-planetas.component';

describe('ListadoPlanetasComponent', () => {
  let component: ListadoPlanetasComponent;
  let fixture: ComponentFixture<ListadoPlanetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoPlanetasComponent]
    });
    fixture = TestBed.createComponent(ListadoPlanetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
