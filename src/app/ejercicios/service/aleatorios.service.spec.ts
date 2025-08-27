import { TestBed } from '@angular/core/testing';

import { AleatoriosService } from './aleatorios.service';

describe('AleatoriosService', () => {
  let service: AleatoriosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AleatoriosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
