import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs/index';
import {ServiceMaintenanceService} from './service-maintenance.service';
import {takeUntil} from 'rxjs/internal/operators';
import {Users} from '../../models/users';
import {ServiceMaintenance} from '../../models/service-maintenance';
import {RouterScroller} from '@angular/router/src/router_scroller';
import {Router} from '@angular/router';

@Component({
  selector: 'app-service-maintenance',
  templateUrl: './service-maintenance.component.html',
  styleUrls: ['./service-maintenance.component.scss']
})
export class ServiceMaintenanceComponent implements OnInit, OnDestroy {

    serviceMaintenanceList: Array<ServiceMaintenance> = [];

    serviceMaintenance: ServiceMaintenance;

    private _unsubscribeAll: Subject<any>;

    constructor(
        private _serviceMaintenanceService: ServiceMaintenanceService,
        private _router: Router
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
      this._serviceMaintenanceService.getAllServiceMaintenance().pipe(takeUntil(this._unsubscribeAll)).subscribe(res => {
        this.serviceMaintenanceList = res;
        console.log('serviceMaintenanceList', this.serviceMaintenanceList);
      });
    }

    // loadServiceMaintenance(): void {
    //     this._serviceMaintenanceService.getServiceMaintenance(this.serviceMaintenanceId)
    //         .pipe(takeUntil(this._unsubscribeAll)).subscribe((res) => {
    //         this.serviceMaintenance = res;
    //         console.log(this.serviceMaintenance);
    //     });
    // }

    view(id): void {
        this._router.navigateByUrl('/service_maintenance/' + id);
    }

}
