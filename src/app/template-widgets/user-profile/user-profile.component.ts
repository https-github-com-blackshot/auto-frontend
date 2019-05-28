import {Component, OnDestroy, OnInit} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {Users} from '../../models/users';
import {AdminService} from '../../features/admin/admin.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {Subject} from 'rxjs/index';
import {UserProfileService} from './user-profile.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit , OnDestroy {
    user: Users;
    userId: string;
    private _unsubscribeAll: Subject<any>;
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);

    constructor(
        private _userService: UserProfileService,
        public _dialog: MatDialog,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this._unsubscribeAll = new Subject();
    }

  ngOnInit() {
        this.userId = localStorage.getItem('current_user');
        this.loadUser();

      if (localStorage.getItem('role') !== 'ADMIN' && localStorage.getItem('role') !== 'USER' ) {
          this._router.navigateByUrl('dashboard');
      }
  }

    ngOnDestroy() {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    loadUser() {
        this._userService.getUserById(this.userId).pipe(takeUntil(this._unsubscribeAll)).subscribe(res => {
            this.user = res;
            console.log(this.user)
        })
    }

    editUser(user: Users): void {
        if (user != null) {
            this._userService.updateUser(user).subscribe(res => {
                this.loadUser();
            });
        }

    }




}
