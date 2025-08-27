import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiChuckNorrisComponent } from './api-chuck-norris.component';

describe('ApiChuckNorrisComponent', () => {
  let component: ApiChuckNorrisComponent;
  let fixture: ComponentFixture<ApiChuckNorrisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiChuckNorrisComponent]
    });
    fixture = TestBed.createComponent(ApiChuckNorrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
