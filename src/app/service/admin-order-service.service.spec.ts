import { TestBed, inject } from '@angular/core/testing';

import { AdminOrderService } from '../services/admin-order-service.service';

describe('AdminOrderServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminOrderService]
    });
  });

  it('should be created', inject([AdminOrderService], (service: AdminOrderService) => {
    expect(service).toBeTruthy();
  }));
});
