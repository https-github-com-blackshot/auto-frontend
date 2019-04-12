import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ServiceMaintenanceComponent} from './service-maintenance.component';
import {ServiceMaintenanceDetailComponent} from './components/service-maintenance-detail/service-maintenance-detail.component';

export const routes: Routes = [
    { path: '', component: ServiceMaintenanceComponent },
    { path: 'detail/:id', component: ServiceMaintenanceDetailComponent },
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
