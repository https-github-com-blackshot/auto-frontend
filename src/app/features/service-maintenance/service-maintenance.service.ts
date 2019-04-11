import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {map} from 'rxjs/operators';
import {ServiceMaintenance} from '../../models/service-maintenance';

@Injectable()
export class ServiceMaintenanceService {

    private readonly GET_ALL_USERS = 'core/users/read';
    private readonly GET_ALL_SERVICE_MAINTENANCE = 'core/serviceMaintenance/read';
    private readonly GET_SERVICE_MAINTENANCE = 'core/serviceMaintenance';
    private readonly CREATE_SERVICE_MAINTENANCE = 'core/serviceMaintenance/create';
    private readonly UPDATE_SERVICE_MAINTENANCE = 'core/serviceMaintenance/update';
    private readonly DELETE_SERVICE_MAINTENANCE = 'core/serviceMaintenance/delete';

    constructor(
        private _http: HttpClient
    ) { }

    public getAllUsers(): Observable<any> {
      return this._http.get(this.GET_ALL_USERS).pipe(map(res => {
        return res;
      }));
    }

    public getAllServiceMaintenance(): Observable<any> {
        return this._http.get(this.GET_ALL_SERVICE_MAINTENANCE).pipe(map(res => {
            return res;
        }));
    }

    public getServiceMaintenance(id: number): Observable<any> {
        return this._http.get(this.GET_SERVICE_MAINTENANCE + '/' + id).pipe(map(res => {
            return res;
        }));
    }

    public createServiceMaintenance(serviceMaintenance: ServiceMaintenance): Observable<any> {
      return this._http.post(this.CREATE_SERVICE_MAINTENANCE, serviceMaintenance).pipe(map(res => {
        return res;
      }));
    }

    public updateServiceMaintenance(serviceMaintenance: ServiceMaintenance): Observable<any> {
        return this._http.put(this.UPDATE_SERVICE_MAINTENANCE, serviceMaintenance).pipe(map(res => {
            return res;
        }));
    }

    public deleteServiceMaintenance(id: string): Observable<any> {
        return this._http.delete(this.DELETE_SERVICE_MAINTENANCE + '/' + id).pipe(map(res => {
            return res;
        }));
    }

}
