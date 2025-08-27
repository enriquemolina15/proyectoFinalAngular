import { TestBed } from '@angular/core/testing';

import { MayusculasService } from './mayusculas.service';

describe('MayusculasService', () => {
  let service: MayusculasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MayusculasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
