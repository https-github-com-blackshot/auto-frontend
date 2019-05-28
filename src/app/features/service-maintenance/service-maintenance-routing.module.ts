import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ServiceMaintenanceComponent} from './service-maintenance.component';
import {ServiceMaintenanceDetailComponent} from './components/service-maintenance-detail/service-maintenance-detail.component';
import {ServiceMaintenanceControlComponent} from './components/service-maintenance-control/service-maintenance-control.component';

export const routes: Routes = [
    { path: '', component: ServiceMaintenanceComponent },
    { path: 'service_maintenance/:id', component: ServiceMaintenanceDetailComponent },
    { path: 'service_maintenance/control', component: ServiceMaintenanceControlComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class ServiceMaintenanceRoutingModule {

}
