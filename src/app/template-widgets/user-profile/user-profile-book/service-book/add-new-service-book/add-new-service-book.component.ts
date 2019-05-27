import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs/index';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Users} from '../../../../../models/users';
import {Roles} from '../../../../../models/roles';
import {ServiceBook} from '../../../../../models/service-book';
import {takeUntil} from 'rxjs/operators';
import {UserProfileService} from '../../../user-profile.service';

@Component({
  selector: 'app-add-new-service-book',
  templateUrl: './add-new-service-book.component.html',
  styleUrls: ['./add-new-service-book.component.scss']
})
export class AddNewServiceBookComponent implements OnInit, OnDestroy {

    private _unsubscribeAll: Subject<any>;
    private users: Array<Users> = [];

    constructor(
        private _userService: UserProfileService,
        public _dialogRef: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: {
            title: string,
            serviceBoo: ServiceBook,
            user: Users[]
        }
    ) {
        this._unsubscribeAll = new Subject();
    }

    onNoClick(): void {
        this._dialogRef.close();
    }

    ngOnInit(): void {
        this.loadUsers();
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
    loadUsers() {
        this._userService.getAllUsers().pipe(takeUntil(this._unsubscribeAll)).subscribe(res => {
            this.users = res;
            console.log(this.users)
            return res;
        })
    }


}
