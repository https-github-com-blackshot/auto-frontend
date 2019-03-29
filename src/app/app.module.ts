import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './template-widgets/dashboard/dashboard.component';
import { UserProfileComponent } from './template-widgets/user-profile/user-profile.component';
import { TableListComponent } from './template-widgets/table-list/table-list.component';
import { TypographyComponent } from './template-widgets/typography/typography.component';
import { IconsComponent } from './template-widgets/icons/icons.component';
import { MapsComponent } from './template-widgets/maps/maps.component';
import { NotificationsComponent } from './template-widgets/notifications/notifications.component';
import { UpgradeComponent } from './template-widgets/upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './template-widgets/layouts/admin-layout/admin-layout.component';
import {AuthComponent} from './feauters/auth/auth.component';
import {AuthService} from './feauters/auth/auth.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule, HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
      AuthComponent

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
