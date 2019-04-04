import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ServiceMaintenanceComponent } from './service-maintenance.component';
import {ServiceMaintenanceService} from './service-maintenance.service';
import {ServiceMaintenanceRoutingModule} from './service-maintenance-routing.module';
import {MatButtonModule, MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ServiceMaintenanceRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [ServiceMaintenanceComponent],
  providers: [ServiceMaintenanceService],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ServiceMaintenanceModule { }
