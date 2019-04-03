import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AdminService} from './admin.service';
import {AdminRoutingModule} from './admin-routing.module';
import {MatButtonModule, MatDialogModule, MatIconModule, MatTabsModule} from '@angular/material';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';
import { RightsComponent } from './components/rights/rights.component';
import { UserModalComponent } from './components/users/user-modal/user-modal.component';

@NgModule({
  imports: [
      CommonModule,
      HttpClientModule,
      FormsModule,
      AdminRoutingModule,

      MatTabsModule,
      MatButtonModule,
      MatIconModule,
      MatDialogModule
  ],
  declarations: [AdminComponent, UsersComponent, RolesComponent, RightsComponent, UserModalComponent],
  providers: [AdminService],
  entryComponents: [UserModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule { }
