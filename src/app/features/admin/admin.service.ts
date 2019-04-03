import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Users} from '../../models/users';

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    private readonly GET_ALL_USERS = 'http://localhost:8080/core/users/read';
    private readonly GET_ALL_ROLES = 'http://localhost:8080/core/roles/read';

    constructor(
        private _http: HttpClient
    ) {}

    public getAllUsers(): Observable<any> {
        return this._http.get(this.GET_ALL_USERS).pipe(map(res => {
            return res;
        }));
    }

    public getAllRoles(): Observable<any> {
        return this._http.get(this.GET_ALL_ROLES).pipe(map(res => {
            return res;
        }));
    }

}
