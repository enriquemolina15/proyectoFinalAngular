import { TestBed } from '@angular/core/testing';

import { MinusculasService } from './minusculas.service';

describe('MinusculasService', () => {
  let service: MinusculasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinusculasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
