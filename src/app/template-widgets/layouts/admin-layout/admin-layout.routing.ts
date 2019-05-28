import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {AuthComponent} from '../../../features/auth/auth.component';
import {AdminComponent} from '../../../features/admin/admin.component';
import {AdminLayoutComponent} from './admin-layout.component';
import {ServiceMaintenanceComponent} from '../../../features/service-maintenance/service-maintenance.component';

export const AdminLayoutRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: '',
                loadChildren: './../../../features/admin/admin.module#AdminModule'
            }]
    },
    {
        path: 'service_maintenance',
        component: ServiceMaintenanceComponent,
        children: [
            {
                path: '',
                loadChildren: './../../../features/service-maintenance/service-maintenance.module#ServiceMaintenanceModule'
            }]
    },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent }

];
