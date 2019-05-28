import {Component, OnDestroy, OnInit} from '@angular/core';
import {Users} from '../../../../models/users';
import {Subject} from 'rxjs';
import {AdminService} from '../../admin.service';
import {MatDialog} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {UserModalComponent} from '../users/user-modal/user-modal.component';
import {Roles} from '../../../../models/roles';
import {RoleModalComponent} from './role-modal/role-modal.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit, OnDestroy {

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
        this.loadRoles();
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    loadRoles() {
        this._adminService.getAllRoles().pipe(takeUntil(this._unsubscribeAll)).subscribe(res => {
            this.roles = res;
            console.log(this.roles)
        })
    }

    addNewRole(): void {
        const dialogRef = this._dialog.open(RoleModalComponent, {
            width: '450px',
            data: {
                title: 'Добавление новой роли',
                role: new Roles()
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log('result', result);
            if (result !== null && result !== undefined) {
                this._adminService.createRole(result).subscribe(res => {
                    this.loadRoles();
                });
            }
        });
    }

    editRole(role: Roles): void {
        const dialogRef = this._dialog.open(RoleModalComponent, {
            width: '450px',
            data: {
                title: 'Изменение данных роли',
                role: role
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log('result', result);
            if (result !== null && result !== undefined) {
                this._adminService.updateRole(result).subscribe(res => {
                    this.loadRoles();
                });
            }
        });
    }

    deleteRole(roleId: number): void {
        this._adminService.deleteRole(roleId).subscribe(res => {
            this.loadRoles();
        });
    }

}
