import {Component, OnDestroy, OnInit} from '@angular/core';
import {ServiceBook} from '../../../../models/service-book';
import {takeUntil} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs/index';
import {MatDialog} from '@angular/material';
import {UserProfileService} from '../../user-profile.service';
import {Users} from '../../../../models/users';
import {UserModalComponent} from '../../../../features/admin/components/users/user-modal/user-modal.component';
import {AddNewServiceBookComponent} from './add-new-service-book/add-new-service-book.component';

@Component({
  selector: 'app-service-book',
  templateUrl: './service-book.component.html',
  styleUrls: ['./service-book.component.scss']
})
export class ServiceBookComponent implements OnInit, OnDestroy {
    userId: string;
    user: Users;

    serviceBook: Array<ServiceBook> = [];
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _userService: UserProfileService,
        public _dialog: MatDialog,
    ) {
        this._unsubscribeAll = new Subject();
    }

  ngOnInit() {

      this.userId = localStorage.getItem('current_user');
      this.loadServiceBook();
      this.loadUser();
  }
  ngOnDestroy(): void {
  }
    loadServiceBook() {
        this._userService.getAllServiceBook().pipe(takeUntil(this._unsubscribeAll)).subscribe(res => {
            this.serviceBook = res;
            console.log('service book', this.serviceBook);
        })
    }
    addServiceBook() {
        const dialogRef = this._dialog.open(AddNewServiceBookComponent, {
            width: '450px',
            data: {
                title: 'Добавление нового сервисной книжки',
                serviceBoo: new ServiceBook()
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log('result', result);
            if (result !== null && result !== undefined) {
                this._userService.addServiceBook(result).pipe().subscribe(res => {
                    this.loadServiceBook();
                });
            }
        });
    }
    loadUser() {
        this._userService.getUserById(this.userId).pipe(takeUntil(this._unsubscribeAll)).subscribe(res => {
            this.user = res;
            console.log(this.user)
        })
    }
}
