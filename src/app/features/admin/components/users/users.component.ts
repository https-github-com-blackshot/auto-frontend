import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {AdminService} from '../../admin.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Users} from '../../../../../../../../red-resume/frontend-red-resume/src/models/users';
import {takeUntil} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import {UserModalComponent} from './user-modal/user-modal.component';
import {Roles} from '../../../../models/roles';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

    private users: Array<Users> = [];
    private roles: Array<Roles> = [];

    private _unsubscribeAll: Subject<any>;

    constructor(
        private _adminService: AdminService,
        public _dialog: MatDialog,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit() {
        this.loadUsers();
        this.loadRoles();
    }

    ngOnDestroy() {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    loadUsers() {
        this._adminService.getAllUsers().pipe(takeUntil(this._unsubscribeAll)).subscribe(res => {
            this.users = res;
            console.log(this.users)
        })
    }

    loadRoles() {
        this._adminService.getAllRoles().pipe(takeUntil(this._unsubscribeAll)).subscribe((res) => {
            this.roles = res;
        });
    }

    addNewUser(): void {
        const dialogRef = this._dialog.open(UserModalComponent, {
            width: '450px',
            data: {
                title: 'Добавление нового пользователя',
                user: new Users(),
                roles: this.roles
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log('result', result);
            if (result !== null && result !== undefined) {
                this._adminService.createUser(result).subscribe(res => {
                    this.loadUsers();
                });
            }
        });
    }

    editUser(user: Users): void {
        const dialogRef = this._dialog.open(UserModalComponent, {
            width: '450px',
            data: {
                title: 'Изменение данных пользователя',
                user: user,
                roles: this.roles
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log('result', result);
            if (result !== null && result !== undefined) {
                this._adminService.updateUser(result).subscribe(res => {
                    this.loadUsers();
                });
            }
        });
    }

    deleteUser(userId: number): void {
        this._adminService.deleteUser(userId).subscribe(res => {
            this.loadUsers();
        });
    }

}
