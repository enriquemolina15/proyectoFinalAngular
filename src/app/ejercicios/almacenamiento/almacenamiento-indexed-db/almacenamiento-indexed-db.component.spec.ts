import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenamientoIndexedDBComponent } from './almacenamiento-indexed-db.component';

describe('AlmacenamientoIndexedDBComponent', () => {
  let component: AlmacenamientoIndexedDBComponent;
  let fixture: ComponentFixture<AlmacenamientoIndexedDBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlmacenamientoIndexedDBComponent]
    });
    fixture = TestBed.createComponent(AlmacenamientoIndexedDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
