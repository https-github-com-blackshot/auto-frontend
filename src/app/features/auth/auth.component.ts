import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  userData: any = {
    username: '',
    password: ''
  };

  constructor(
      private _authService: AuthService,
      private _route: Router
  ) { }

  ngOnInit() {

  }

  authenticate(): void {
    this._authService.getUserByUsernameAndPassword(this.userData.username, this.userData.password).subscribe((res) => {
      if (res !== null && res !== undefined) {
        localStorage.setItem('current_user', res.id);
        console.log(res);
        this._authService.getUserRoleMapByUserId(res.id).subscribe((res2) => {
          const userRoleMap = res2;
          if (userRoleMap.roleId === 1) {
            localStorage.setItem('role', 'ADMIN');
          } else {
            localStorage.setItem('role', 'USER');
          }
            this._route.navigateByUrl('dashboard');
        });
      }
    });
  }

}
