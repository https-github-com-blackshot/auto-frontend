import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {ServiceMaintenanceService} from '../../service-maintenance.service';
import {ActivatedRoute} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {ServiceMaintenance} from '../../../../models/service-maintenance';
import {Rating} from '../../../../models/rating';

@Component({
  selector: 'app-service-maintenance-detail',
  templateUrl: './service-maintenance-detail.component.html',
  styleUrls: ['./service-maintenance-detail.component.scss']
})
export class ServiceMaintenanceDetailComponent implements OnInit, OnDestroy {

    serviceMaintenance: ServiceMaintenance;
    rating: Rating;
    overallRating: number;
    serviceMaintenanceId: number;

    private _unsubscribeAll: Subject<any>;

    constructor(
        private _serviceMaintenanceService: ServiceMaintenanceService,
        private _route: ActivatedRoute
    ) {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this.serviceMaintenance = new ServiceMaintenance();
        this._route.params.subscribe(params => {
            this.serviceMaintenanceId = params['id'];
            if (this.serviceMaintenanceId !== undefined && this.serviceMaintenanceId !== null) {
                this.loadServiceMaintenance();
            }
        });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    loadServiceMaintenance(): void {
        this._serviceMaintenanceService.getServiceMaintenance(this.serviceMaintenanceId)
            .pipe(takeUntil(this._unsubscribeAll)).subscribe((res => {
            this.serviceMaintenance = res;
            this.loadRating();
            console.log('Service Maintenance', this.serviceMaintenance);
        }));
    }

    loadRating(): void {
        this._serviceMaintenanceService.getRating(this.serviceMaintenance.ratingId)
            .pipe(takeUntil(this._unsubscribeAll)).subscribe((res => {
            this.rating = res;
            console.log('rating', this.rating);
            this.overallRating = (this.rating.veryLow + this.rating.low + this.rating.medium + this.rating.high + this.rating.veryHigh) / 2;
                console.log('overallRating', this.overallRating);
            }));
    }

    giveRating(score: number): void {
        if (this.rating !== undefined && this.rating !== null) {
            switch (score) {
                case 1:
                    this.rating.veryLow++;
                    break;
                case 2:
                    this.rating.low++;
                    break;
                case 3:
                    this.rating.medium++;
                    break;
                case 4:
                    this.rating.high++;
                    break;
                case 5:
                    this.rating.veryHigh++;
                    break;
            }
            this._serviceMaintenanceService.updateRating(this.rating)
                .pipe(takeUntil(this._unsubscribeAll)).subscribe((res) => {
                    this.rating = res;
                this.serviceMaintenance.ratingId = this.rating.id;
                this._serviceMaintenanceService.updateServiceMaintenance(this.serviceMaintenance)
                    .pipe(takeUntil(this._unsubscribeAll)).subscribe((response) => {
                    this.serviceMaintenance = response;
                });
            })
        } else {
            this.rating = new Rating();
            switch (score) {
                case 1:
                    this.rating.veryLow = 1;
                    break;
                case 2:
                    this.rating.low = 1;
                    break;
                case 3:
                    this.rating.medium = 1;
                    break;
                case 4:
                    this.rating.high = 1;
                    break;
                case 5:
                    this.rating.veryHigh = 1;
                    break;
            }
            this._serviceMaintenanceService.createRating(this.rating)
                .pipe(takeUntil(this._unsubscribeAll)).subscribe((res) => {
                this.rating = res;
                this.serviceMaintenance.ratingId = this.rating.id;
                this._serviceMaintenanceService.updateServiceMaintenance(this.serviceMaintenance)
                    .pipe(takeUntil(this._unsubscribeAll)).subscribe((response) => {
                     this.serviceMaintenance = response;
                });
            });
        }
    }

}
