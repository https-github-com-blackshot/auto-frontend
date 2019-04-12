import {Component, OnDestroy, OnInit} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {Users} from '../../models/users';
import {AdminService} from '../../features/admin/admin.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {Subject} from 'rxjs/index';
import {UserProfileService} from './user-profile.service';
import {UserModalComponent} from '../../features/admin/components/users/user-modal/user-modal.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit , OnDestroy {

    users: Array<Users> = [];
    user: Users;

    private _unsubscribeAll: Subject<any>;

    constructor(
        private _userService: UserProfileService,
        public _dialog: MatDialog,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this._unsubscribeAll = new Subject();
    }

  ngOnInit() {
      this.loadUsers();
  }

    ngOnDestroy() {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    loadUsers() {
        this._userService.getAllUsers().pipe(takeUntil(this._unsubscribeAll)).subscribe(res => {
            this.users = res;
            this.user = this.users[0];
            console.log(this.users)
        })
    }

    editUser(user: Users): void {
        if (user != null) {
            this._userService.updateUser(user).subscribe(res => {
                this.loadUsers();
            });
        }

    }


}
