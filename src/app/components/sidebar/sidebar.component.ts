import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ADMIN_ROUTES: RouteInfo[] = [
    { path: '/user-profile', title: 'Студент',  icon: 'person', class: '' },
    { path: '/admin', title: 'Администрирование', icon: 'group_add', class: ''},
    { path: '/service_maintenance', title: 'Организация', icon: 'build', class: ''}
];

export const USER_ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Рабочая область',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Профиль пользователя',  icon: 'person', class: '' },
    { path: '/service_maintenance', title: 'СТО', icon: 'build', class: ''}
];

export const SIMPLE_USER_ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Рабочая область',  icon: 'dashboard', class: '' },
    { path: '/service_maintenance', title: 'СТО', icon: 'build', class: ''},
    { path: '/auth/registration', title: 'Регистрация',  icon: 'person', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('role') === 'ADMIN') {
        this.menuItems = ADMIN_ROUTES.filter(menuItem => menuItem);
    } else if (localStorage.getItem('role') === 'USER') {
        this.menuItems = USER_ROUTES.filter(menuItem => menuItem);
    } else {
        this.menuItems = ADMIN_ROUTES.filter(menuItem => menuItem);
    }

  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
