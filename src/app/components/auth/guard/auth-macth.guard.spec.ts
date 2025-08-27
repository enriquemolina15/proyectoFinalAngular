import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { authMacthGuard } from './auth-macth.guard';

describe('authMacthGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authMacthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
