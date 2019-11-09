import { TestBed } from '@angular/core/testing';

import { ExtypiService } from './extypi.service';

describe('ExtypiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExtypiService = TestBed.get(ExtypiService);
    expect(service).toBeTruthy();
  });
});
