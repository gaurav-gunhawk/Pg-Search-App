import { TestBed } from '@angular/core/testing';

import { ServiceforformatService } from './serviceforformat.service';

describe('ServiceforformatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceforformatService = TestBed.get(ServiceforformatService);
    expect(service).toBeTruthy();
  });
});
