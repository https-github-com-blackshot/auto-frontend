import { ServiceMaintenanceModule } from './service-maintenance.module';

describe('ServiceMaintenanceModule', () => {
  let serviceMaintenanceModule: ServiceMaintenanceModule;

  beforeEach(() => {
    serviceMaintenanceModule = new ServiceMaintenanceModule();
  });

  it('should create an instance', () => {
    expect(serviceMaintenanceModule).toBeTruthy();
  });
});
