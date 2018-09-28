import { TestBed, inject } from '@angular/core/testing';

import { AdminOrderServiceService } from './admin-order-service.service';

describe('AdminOrderServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminOrderServiceService]
    });
  });

  it('should be created', inject([AdminOrderServiceService], (service: AdminOrderServiceService) => {
    expect(service).toBeTruthy();
  }));
});
