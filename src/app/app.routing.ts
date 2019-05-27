import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './template-widgets/layouts/admin-layout/admin-layout.component';
import {AuthComponent} from './features/auth/auth.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'auth/login',
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
    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
    // { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
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
