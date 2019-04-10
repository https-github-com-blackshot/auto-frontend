import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Users} from '../../../../../models/users';
import {Roles} from '../../../../../models/roles';

@Component({
  selector: 'app-role-modal',
  templateUrl: './role-modal.component.html',
  styleUrls: ['./role-modal.component.scss']
})
export class RoleModalComponent implements OnInit, OnDestroy {

    private _unsubscribeAll: Subject<any>;

    constructor(
        public _dialogRef: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: {
            title: string,
            role: Roles
        }
    ) {
        this._unsubscribeAll = new Subject();
    }

    onNoClick(): void {
        this._dialogRef.close();
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

}
