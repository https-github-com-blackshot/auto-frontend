import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {ServiceMaintenanceService} from '../../service-maintenance.service';
import {ActivatedRoute} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {ServiceMaintenance} from '../../../../models/service-maintenance';
import {Rating} from '../../../../models/rating';
import {Feedback} from '../../../../models/feedback';
import {ServiceMaintenanceFeedbackMap} from '../../../../models/service-maintenance-feedback-map';
import {Users} from '../../../../models/users';
import {UserProfileService} from '../../../../template-widgets/user-profile/user-profile.service';

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
    serviceMaintenanceFeedbackMapList: Array<ServiceMaintenanceFeedbackMap> = [];

    userId: string;
    currentUser: Users;
    message: string;
    fio: string;

    private _unsubscribeAll: Subject<any>;

    constructor(
        private _serviceMaintenanceService: ServiceMaintenanceService,
        private _userService: UserProfileService,
        private _route: ActivatedRoute
    ) {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this.serviceMaintenance = new ServiceMaintenance();
        this.loadCurrentUser();
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

    loadCurrentUser(): void {
        this.userId = localStorage.getItem('current_user');
        this._userService.getUserById(this.userId).pipe(takeUntil(this._unsubscribeAll)).subscribe(res => {
            this.currentUser = res;
            console.log(this.currentUser)
        })
    }

    loadServiceMaintenance(): void {
        this._serviceMaintenanceService.getServiceMaintenance(this.serviceMaintenanceId)
            .pipe(takeUntil(this._unsubscribeAll)).subscribe((res => {
            this.serviceMaintenance = res;
            this.loadRating();
            this.loadServiceMaintenanceFeedbackMap();
            console.log('Service Maintenance', this.serviceMaintenance);
        }));
    }
    loadServiceMaintenanceFeedbackMap(): void {
        this._serviceMaintenanceService.getServiceMaintenanceFeedbackMap(this.serviceMaintenanceId)
            .pipe(takeUntil(this._unsubscribeAll)).subscribe((res => {
                this.serviceMaintenanceFeedbackMapList = res;
                console.log('Feedback', this.serviceMaintenanceFeedbackMapList);
        }))
    }

    createFeedback(): void {
        if (this.message !== '' && this.message !== null) {
            if (this.currentUser !== null && this.currentUser !== undefined) {
                const feedback = new Feedback();
                feedback.content = this.message;
                feedback.fio = this.currentUser.lastName + ' ' + this.currentUser.firstName;
                this.creatFeedback(feedback);
            } else {
                if (this.fio !== '' && this.fio !== null) {
                    const feedback = new Feedback();
                    feedback.fio = this.fio;
                    feedback.content = this.message;
                    this.creatFeedback(feedback);
                }
            }
        }
    }

    creatFeedback(feedback: Feedback): void {
        this._serviceMaintenanceService.createFeedback(feedback).pipe(takeUntil(this._unsubscribeAll)).subscribe((res) => {
            this.createServiceMaintenanceFeedbackMap(res);
        });
    }

    createServiceMaintenanceFeedbackMap(feedback: Feedback): void {
        const serviceMaintenanceFeedbackMap = new ServiceMaintenanceFeedbackMap();
        serviceMaintenanceFeedbackMap.feedbackId = feedback.id;
        serviceMaintenanceFeedbackMap.serviceMaintenanceId = this.serviceMaintenanceId;
        this._serviceMaintenanceService.createServiceMaintenanceFeedbackMap(serviceMaintenanceFeedbackMap).pipe(takeUntil(this._unsubscribeAll)).subscribe((res) => {
            console.log('Your comment was successfully saved');
            this.loadServiceMaintenanceFeedbackMap();
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

}
