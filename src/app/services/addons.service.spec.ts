import { TestBed, inject } from '@angular/core/testing';

import { AddonsService } from './addons.service';

describe('AddonsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddonsService]
    });
  });

  it('should be created', inject([AddonsService], (service: AddonsService) => {
    expect(service).toBeTruthy();
  }));
});
