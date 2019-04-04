import { TestBed, inject } from '@angular/core/testing';

import { ServiceMaintenanceService } from './service-maintenance.service';

describe('ServiceMaintenanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceMaintenanceService]
    });
  });

  it('should be created', inject([ServiceMaintenanceService], (service: ServiceMaintenanceService) => {
    expect(service).toBeTruthy();
  }));
});
