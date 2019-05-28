import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ServiceMaintenance} from '../../../../models/service-maintenance';
import {Subject} from 'rxjs';
import {ServiceMaintenanceService} from '../../service-maintenance.service';
import {ActivatedRoute, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material';

@Component({
  selector: 'app-service-maintenance-control',
  templateUrl: './service-maintenance-control.component.html',
  styleUrls: ['./service-maintenance-control.component.scss']
})
export class ServiceMaintenanceControlComponent implements OnInit, OnDestroy {

    @Output() public myOutput = new EventEmitter();

    serviceMaintenance: ServiceMaintenance;

    horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    verticalPosition: MatSnackBarVerticalPosition = 'top';

    private _unsubscribeAll: Subject<any>;

    constructor(
        private _serviceMaintenanceService: ServiceMaintenanceService,
        private _route: ActivatedRoute,
        private router: Router,
        private _snackBar: MatSnackBar
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

    public buttonClick(): void {

        this.myOutput.emit(true);

    }

    // loadServiceMaintenance(): void {
    //   this._serviceMaintenanceService.getServiceMaintenance(this.serviceMaintenanceId)
    //       .pipe(takeUntil(this._unsubscribeAll)).subscribe((res) => {
    //         this.serviceMaintenance = res;
    //         console.log(this.serviceMaintenance);
    //   });
    // }

    create(): void {
        this._serviceMaintenanceService.createServiceMaintenance(this.serviceMaintenance)
            .pipe(takeUntil(this._unsubscribeAll)).subscribe((res) => {
            this.openSnackBar('Данные успешно сохранены!');
            this.serviceMaintenance = new ServiceMaintenance();
            console.log('res', res);
        });
    }

    openSnackBar(message: string) {
        this._snackBar.open(message, '', {
            duration: 2000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }

}
