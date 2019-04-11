import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ServiceMaintenanceComponent } from './service-maintenance.component';
import {ServiceMaintenanceService} from './service-maintenance.service';
import {ServiceMaintenanceRoutingModule} from './service-maintenance-routing.module';
import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule} from '@angular/material';
import {ServiceMaintenanceDetailComponent} from './components/service-maintenance-detail/service-maintenance-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ServiceMaintenanceRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ],
  declarations: [ServiceMaintenanceComponent, ServiceMaintenanceDetailComponent],
  providers: [ServiceMaintenanceService],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ServiceMaintenanceModule { }
