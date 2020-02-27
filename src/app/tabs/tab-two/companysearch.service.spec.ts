import { TestBed } from '@angular/core/testing';

import { CompanysearchService } from './companysearch.service';

describe('CompanysearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanysearchService = TestBed.get(CompanysearchService);
    expect(service).toBeTruthy();
  });
});
