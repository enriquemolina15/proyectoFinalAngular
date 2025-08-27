import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenamientoCookieComponent } from './almacenamiento-cookie.component';

describe('AlmacenamientoCookieComponent', () => {
  let component: AlmacenamientoCookieComponent;
  let fixture: ComponentFixture<AlmacenamientoCookieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlmacenamientoCookieComponent]
    });
    fixture = TestBed.createComponent(AlmacenamientoCookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
