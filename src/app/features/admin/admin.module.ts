import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AdminService} from './admin.service';
import {AdminRoutingModule} from './admin-routing.module';
import {
    DateAdapter,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule, MatNativeDateModule,
    MatTabsModule
} from '@angular/material';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';
import { RightsComponent } from './components/rights/rights.component';
import { UserModalComponent } from './components/users/user-modal/user-modal.component';
import { RoleModalComponent } from './components/roles/role-modal/role-modal.component';

@NgModule({
  imports: [
      CommonModule,
      HttpClientModule,
      FormsModule,
      AdminRoutingModule,

      MatTabsModule,
      MatButtonModule,
      MatIconModule,
      MatDialogModule,
      MatInputModule,
      MatFormFieldModule,
      MatDatepickerModule,
      MatNativeDateModule
  ],
  declarations: [AdminComponent, UsersComponent, RolesComponent, RightsComponent, UserModalComponent, RoleModalComponent],
  providers: [AdminService],
  entryComponents: [UserModalComponent, RoleModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule { }
