import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ServiceMaintenance} from '../../../../models/service-maintenance';
import {Subject} from 'rxjs';
import {ServiceMaintenanceService} from '../../service-maintenance.service';
import {ActivatedRoute} from '@angular/router';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-service-maintenance-control',
  templateUrl: './service-maintenance-control.component.html',
  styleUrls: ['./service-maintenance-control.component.scss']
})
export class ServiceMaintenanceControlComponent implements OnInit, OnDestroy {

    @Input() serviceMaintenance: ServiceMaintenance;

    private _unsubscribeAll: Subject<any>;

    constructor(
        private _serviceMaintenanceService: ServiceMaintenanceService,
        private _route: ActivatedRoute
    ) {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this.serviceMaintenance = new ServiceMaintenance();
        // this.loadServiceMaintenance();
        this._route.params.subscribe(params => {
            // this.serviceMaintenanceId = params['id'];
        });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // loadServiceMaintenance(): void {
    //   this._serviceMaintenanceService.getServiceMaintenance(this.serviceMaintenanceId)
    //       .pipe(takeUntil(this._unsubscribeAll)).subscribe((res) => {
    //         this.serviceMaintenance = res;
    //         console.log(this.serviceMaintenance);
    //   });
    // }

    create(): void {
        this.serviceMaintenance.ratingId = 1;
        this._serviceMaintenanceService.createServiceMaintenance(this.serviceMaintenance)
            .pipe(takeUntil(this._unsubscribeAll)).subscribe((res) => {
            console.log('res', res);
        });
    }

}
