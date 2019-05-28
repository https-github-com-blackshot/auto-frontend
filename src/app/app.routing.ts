import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './template-widgets/layouts/admin-layout/admin-layout.component';
import {AuthComponent} from './features/auth/auth.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './template-widgets/layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
    {
      path: '',
      component: AuthComponent,
      children: [
          {
            path: '',
            loadChildren: './features/auth/auth.module#AuthModule'
          }
      ]
    }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
