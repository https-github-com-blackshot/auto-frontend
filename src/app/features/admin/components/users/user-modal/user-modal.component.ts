import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Users} from '../../../../../models/users';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit, OnDestroy {

    private _unsubscribeAll: Subject<any>;

    constructor(
        public _dialogRef: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: {
            title: string,
            user: Users
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
