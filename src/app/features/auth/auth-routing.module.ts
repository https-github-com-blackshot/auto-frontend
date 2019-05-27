import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {AuthFormComponent} from './auth-form/auth-form.component';
import {RegistrationComponent} from './registration/registration.component';


export const routes: Routes = [
    { path: 'auth', component: AuthFormComponent },
    { path: 'registration', component: RegistrationComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
    ],
})
export class AuthRoutingModule {

}
