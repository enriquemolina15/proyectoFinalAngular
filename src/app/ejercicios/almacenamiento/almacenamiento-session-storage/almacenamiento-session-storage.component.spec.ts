import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenamientoSessionStorageComponent } from './almacenamiento-session-storage.component';

describe('AlmacenamientoSessionStorageComponent', () => {
  let component: AlmacenamientoSessionStorageComponent;
  let fixture: ComponentFixture<AlmacenamientoSessionStorageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlmacenamientoSessionStorageComponent]
    });
    fixture = TestBed.createComponent(AlmacenamientoSessionStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
