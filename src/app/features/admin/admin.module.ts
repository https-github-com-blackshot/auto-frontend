import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AdminService} from './admin.service';
import {AdminRoutingModule} from './admin-routing.module';

@NgModule({
  imports: [
      CommonModule,
      HttpClientModule,
      FormsModule,
      AdminRoutingModule
  ],
  declarations: [AdminComponent],
  providers: [AdminService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule { }
