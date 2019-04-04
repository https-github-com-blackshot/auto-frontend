import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ServiceMaintenanceComponent} from './service-maintenance.component';

export const routes: Routes = [
    { path: '', component: ServiceMaintenanceComponent },
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
