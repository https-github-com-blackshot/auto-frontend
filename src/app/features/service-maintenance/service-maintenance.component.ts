import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs/index';
import {ServiceMaintenanceService} from './service-maintenance.service';
import {takeUntil} from 'rxjs/internal/operators';
import {Users} from '../../models/users';

@Component({
  selector: 'app-service-maintenance',
  templateUrl: './service-maintenance.component.html',
  styleUrls: ['./service-maintenance.component.scss']
})
export class ServiceMaintenanceComponent implements OnInit, OnDestroy {

    users: Array<Users> = [];

    private _unsubscribeAll: Subject<any>;

    constructor(
        private _serviceMaintenanceService: ServiceMaintenanceService
    ) {
      this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
      this.loadUsers();
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    loadUsers(): void {
      this._serviceMaintenanceService.getAllUsers().pipe(takeUntil(this._unsubscribeAll)).subscribe(res => {
        this.users = res;
        console.log('users', this.users);
      })
    }

}
