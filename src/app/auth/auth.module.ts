import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {ComponentsModule} from '../components/components.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from '../app.routing';
import {AgmCoreModule} from '@agm/core';
import {AppComponent} from '../app.component';
import {AdminLayoutComponent} from '../layouts/admin-layout/admin-layout.component';
import {AuthComponent} from './auth.component';
import {AuthService} from './auth.service';
import {AuthRoutingModule} from './auth-routing.module';
import {CommonModule} from '@angular/common';
import {AdminLayoutRoutes} from '../layouts/admin-layout/admin-layout.routing';
import { AuthFormComponent } from './auth-form/auth-form.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        AuthRoutingModule,
        FormsModule
    ],
    declarations: [
        AuthFormComponent
    ],
    providers: [AuthService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {

}
