import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceMaintenanceDetailComponent } from './service-maintenance-detail.component';

describe('ServiceMaintenanceDetailComponent', () => {
  let component: ServiceMaintenanceDetailComponent;
  let fixture: ComponentFixture<ServiceMaintenanceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceMaintenanceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceMaintenanceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
