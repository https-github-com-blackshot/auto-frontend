import {Component, OnDestroy, OnInit} from '@angular/core';
import {ServiceBook} from '../../../../models/service-book';
import {takeUntil} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs/index';
import {MatDialog} from '@angular/material';
import {UserProfileService} from '../../user-profile.service';
import {Users} from '../../../../models/users';

@Component({
  selector: 'app-service-book',
  templateUrl: './service-book.component.html',
  styleUrls: ['./service-book.component.scss']
})
export class ServiceBookComponent implements OnInit, OnDestroy {

    users: Array<Users> = [];

    serviceBook: Array<ServiceBook> = [];
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _userService: UserProfileService
    ) {
        this._unsubscribeAll = new Subject();
    }

  ngOnInit() {

      this.loadServiceBook();
      this.loadUsers();
  }
  ngOnDestroy(): void {}
    loadServiceBook() {
        this._userService.getAllServiceBook().pipe(takeUntil(this._unsubscribeAll)).subscribe(res => {
            this.serviceBook = res;
            console.log('service book', this.serviceBook);
        })
    }
    loadUsers() {
        this._userService.getAllUsers().pipe(takeUntil(this._unsubscribeAll)).subscribe(res => {
            this.users = res;
            // console.log(this.users)
        })
    }

}
