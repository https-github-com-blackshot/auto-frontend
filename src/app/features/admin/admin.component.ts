import {Component, OnDestroy, OnInit} from '@angular/core';
import {AdminService} from './admin.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {

    private _unsubscribeAll: Subject<any>;

    constructor(
        private _adminService: AdminService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {}

    ngOnInit() {
        if (localStorage.getItem('role') !== 'ADMIN') {
            this._router.navigateByUrl('dashboard');
        }
    }

    ngOnDestroy() {

    }

}
