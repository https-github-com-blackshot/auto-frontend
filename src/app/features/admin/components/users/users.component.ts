import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {AdminService} from '../../admin.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Users} from '../../../../models/users';
import {takeUntil} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import {UserModalComponent} from './user-modal/user-modal.component';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

    private users: Array<Users> = [];

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

    openDialog(): void {
        const dialogRef = this._dialog.open(UserModalComponent, {
            width: '250px',
            data: {}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');

        });
    }

}
