import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenamientoLocalStorageComponent } from './almacenamiento-local-storage.component';

describe('AlmacenamientoLocalStorageComponent', () => {
  let component: AlmacenamientoLocalStorageComponent;
  let fixture: ComponentFixture<AlmacenamientoLocalStorageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlmacenamientoLocalStorageComponent]
    });
    fixture = TestBed.createComponent(AlmacenamientoLocalStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
