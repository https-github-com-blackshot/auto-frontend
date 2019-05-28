import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceMaintenanceControlComponent } from './service-maintenance-control.component';

describe('ServiceMaintenanceControlComponent', () => {
  let component: ServiceMaintenanceControlComponent;
  let fixture: ComponentFixture<ServiceMaintenanceControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceMaintenanceControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceMaintenanceControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
