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
        const dialogRef = this._dialog.open(UserModalComponent, {
            width: '450px',
            data: {
                title: 'Изменение ваши данных',
                user: user
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log('result', result);
            if (result !== null && result !== undefined) {
                this._userService.updateUser(result).subscribe(res => {
                    this.loadUsers();
                });
            }
        });
    }


}
