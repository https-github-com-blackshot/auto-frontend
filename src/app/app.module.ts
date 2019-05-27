import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './template-widgets/layouts/admin-layout/admin-layout.component';
import {AuthComponent} from './features/auth/auth.component';
import {AuthService} from './features/auth/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule, HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
      MatIconModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthComponent,


  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
