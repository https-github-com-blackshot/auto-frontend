import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {UserProfileComponent} from '../../user-profile/user-profile.component';
import {TableListComponent} from '../../table-list/table-list.component';
import {TypographyComponent} from '../../typography/typography.component';
import {IconsComponent} from '../../icons/icons.component';
import {MapsComponent} from '../../maps/maps.component';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {UpgradeComponent} from '../../upgrade/upgrade.component';


import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule, MatTabsModule, MatIconModule, MatListModule,
    MatDialogModule, MatDatepickerModule, MatNativeDateModule,
} from '@angular/material';
import {AdminModule} from '../../../features/admin/admin.module';
import {ServiceMaintenanceModule} from '../../../features/service-maintenance/service-maintenance.module';
import {UserProfileService} from '../../user-profile/user-profile.service';
import {ServiceBookComponent} from '../../user-profile/user-profile-book/service-book/service-book.component';
import {AddNewServiceBookComponent} from '../../user-profile/user-profile-book/service-book/add-new-service-book/add-new-service-book.component';
import {UserModalComponent} from '../../../features/admin/components/users/user-modal/user-modal.component';
import {RoleModalComponent} from '../../../features/admin/components/roles/role-modal/role-modal.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        AdminModule,
        ServiceMaintenanceModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatTabsModule,
        MatIconModule,
        ReactiveFormsModule,
        MatListModule,
        MatDialogModule,
    ],
    declarations: [
        DashboardComponent,
        UserProfileComponent,
        TableListComponent,
        TypographyComponent,
        IconsComponent,
        MapsComponent,
        NotificationsComponent,
        UpgradeComponent,
        ServiceBookComponent,
        AddNewServiceBookComponent,
    ],
    providers: [UserProfileService],
    entryComponents: [AddNewServiceBookComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AdminLayoutModule {
}
