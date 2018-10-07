import { TestBed, inject } from '@angular/core/testing';

import { FlavorsService } from './flavors.service';

describe('FlavorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlavorsService]
    });
  });

  it('should be created', inject([FlavorsService], (service: FlavorsService) => {
    expect(service).toBeTruthy();
  }));
});
