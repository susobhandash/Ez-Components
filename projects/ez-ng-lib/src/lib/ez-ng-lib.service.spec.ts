import { TestBed } from '@angular/core/testing';

import { EzNgLibService } from './ez-ng-lib.service';

describe('EzNgLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EzNgLibService = TestBed.get(EzNgLibService);
    expect(service).toBeTruthy();
  });
});
