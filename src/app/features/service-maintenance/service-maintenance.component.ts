import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs/index';
import {ServiceMaintenanceService} from './service-maintenance.service';
import {takeUntil} from 'rxjs/internal/operators';
import {Users} from '../../models/users';
import {ServiceMaintenance} from '../../models/service-maintenance';
import {RouterScroller} from '@angular/router/src/router_scroller';
import {Router} from '@angular/router';
import {Rating} from '../../models/rating';

@Component({
  selector: 'app-service-maintenance',
  templateUrl: './service-maintenance.component.html',
  styleUrls: ['./service-maintenance.component.scss']
})
export class ServiceMaintenanceComponent implements OnInit, OnDestroy {

    serviceMaintenanceList: Array<ServiceMaintenance> = [];

    images: string[] = [];

    rating: Rating;
    overallRating: number;

    role: string;

    serviceMaintenance: ServiceMaintenance;

    private _unsubscribeAll: Subject<any>;

    constructor(
        private _serviceMaintenanceService: ServiceMaintenanceService,
        private _router: Router
    ) {
      this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this.role = localStorage.getItem('role');
        this.images.push('../../Photos/1suret.jpg');
        this.images.push('./../../Photos/sto1.jpg');
        this.loadUsers();
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    loadUsers(): void {
      this._serviceMaintenanceService.getAllServiceMaintenance().pipe(takeUntil(this._unsubscribeAll)).subscribe(res => {
        this.serviceMaintenanceList = res;
        this.serviceMaintenance = this.serviceMaintenanceList[0];
        this.loadRating();
        console.log('serviceMaintenanceList', this.serviceMaintenanceList);
      });
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
