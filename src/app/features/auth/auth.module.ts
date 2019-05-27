import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthService} from './auth.service';
import {AuthRoutingModule} from './auth-routing.module';
import {CommonModule} from '@angular/common';
import { AuthFormComponent } from './auth-form/auth-form.component';
import {HttpClientModule} from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        AuthRoutingModule,
        FormsModule
    ],
    declarations: [
        AuthFormComponent,
        RegistrationComponent
    ],
    providers: [AuthService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {

}
