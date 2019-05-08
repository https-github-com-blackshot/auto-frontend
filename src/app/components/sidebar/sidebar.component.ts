import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ADMIN_ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Рабочая область',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Профиль пользователя',  icon: 'person', class: '' },
    { path: '/admin', title: 'Администрирование', icon: 'group_add', class: ''},
    { path: '/service_maintenance', title: 'СТО', icon: 'build', class: ''}
    // { path: '/table-list', title: 'Table List',  icon: 'content_paste', class: '' },
    // { path: '/typography', title: 'Typography',  icon: 'library_books', class: '' },
    // { path: '/icons', title: 'Icons',  icon: 'bubble_chart', class: '' },
    // { path: '/maps', title: 'Maps',  icon: 'location_on', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon: 'notifications', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon: 'unarchive', class: 'active-pro' },
];

export const USER_ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Рабочая область',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Профиль пользователя',  icon: 'person', class: '' },
    { path: '/service_maintenance', title: 'СТО', icon: 'build', class: ''}
    // { path: '/table-list', title: 'Table List',  icon: 'content_paste', class: '' },
    // { path: '/typography', title: 'Typography',  icon: 'library_books', class: '' },
    // { path: '/icons', title: 'Icons',  icon: 'bubble_chart', class: '' },
    // { path: '/maps', title: 'Maps',  icon: 'location_on', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon: 'notifications', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon: 'unarchive', class: 'active-pro' },
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
    } else {
        this.menuItems = USER_ROUTES.filter(menuItem => menuItem);
    }

  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
