import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {Users} from '../../../models/users';
import PerfectScrollbar from 'perfect-scrollbar';
import {Location} from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

    user: Users;

    constructor(
        private _authService: AuthService,
        private _route: Router,
        public location: Location,
        private router: Router
    ) { }

    ngOnInit() {
      this.user = new Users;
        const currentUserId = localStorage.getItem('current_user');
        if (currentUserId !== null && currentUserId !== undefined) {
            this._route.navigateByUrl('dashboard');
        }
    }
    createUser(): void {
        console.log(this.user);
        this.user.roleId = 2;
        if (this.user !== null && this.user !== undefined) {
            this._authService.createUser(this.user).subscribe((res) => {
                console.log(res);
            });
        }
        this.authenticate();
    }

    authenticate(): void {
        this._authService.getUserByUsernameAndPassword(this.user.username, this.user.password).subscribe((res) => {
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


    isMaps(path) {
        let titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice( 1 );
        if (path === titlee) {
            return false;
        } else {
            return true;
        }
    }
    runOnRouteChange(): void {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
            const ps = new PerfectScrollbar(elemMainPanel);
            ps.update();
        }
    }
    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }

}
