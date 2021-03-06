import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ServiceMaintenanceComponent } from './service-maintenance.component';
import {ServiceMaintenanceService} from './service-maintenance.service';
import {ServiceMaintenanceRoutingModule} from './service-maintenance-routing.module';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatTabsModule
} from '@angular/material';
import {ServiceMaintenanceDetailComponent} from './components/service-maintenance-detail/service-maintenance-detail.component';
import { ServiceMaintenanceControlComponent } from './components/service-maintenance-control/service-maintenance-control.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ServiceMaintenanceRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule,
  ],
  declarations: [ServiceMaintenanceComponent, ServiceMaintenanceDetailComponent, ServiceMaintenanceControlComponent],
  providers: [ServiceMaintenanceService],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ServiceMaintenanceModule { }
