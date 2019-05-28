import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Users} from '../../../../../models/users';
import {Roles} from '../../../../../models/roles';
import {AdminService} from '../../../admin.service';
import {takeUntil} from 'rxjs/operators';
import {UsersRolesMap} from '../../../../../models/users-roles-map';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit, OnDestroy {

    userRoleMap: UsersRolesMap;

    private _unsubscribeAll: Subject<any>;

    constructor(
        public _adminService: AdminService,
        public _dialogRef: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: {
            title: string,
            user: Users,
            roles: Roles[]
        }
    ) {
        this._unsubscribeAll = new Subject();
    }

    onNoClick(): void {
        this._dialogRef.close();
    }

    ngOnInit(): void {
        this.data.user.birthDate = new Date(this.data.user.birthDate);
        this.userRoleMap = new UsersRolesMap();
        this.loadUserRoleMap();
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    loadUserRoleMap(): void {
        this._adminService.getUserRoleMapByUserId(this.data.user.id)
            .pipe(takeUntil(this._unsubscribeAll)).subscribe((res) => {
                this.userRoleMap = res;
        }, error1 => {
            this.userRoleMap = new UsersRolesMap();
        })
    }

    save(): void {
        const response = {
            user: this.data.user,
            userRoleMap: this.userRoleMap
        };
        this._dialogRef.close(response);
    }

}
