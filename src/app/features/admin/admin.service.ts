import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Users} from '../../../../../../red-resume/frontend-red-resume/src/models/users';
import {Roles} from '../../models/roles';

@Injectable()
export class AdminService {

    private readonly GET_ALL_USERS = 'core/users/read';
    private readonly GET_ALL_ROLES = 'core/roles/read';
    private readonly CREATE_USER = 'core/users/create';
    private readonly UPDATE_USER = 'core/users/update';
    private readonly DELETE_USER = 'core/users/delete';
    private readonly CREATE_ROLE = 'core/roles/create';
    private readonly UPDATE_ROLE = 'core/roles/update';
    private readonly DELETE_ROLE = 'core/roles/delete';

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

    public createUser(user: Users): Observable<any> {
        return this._http.post(this.CREATE_USER, user).pipe(map(res => {
            return res;
        }));
    }

    public updateUser(user: Users): Observable<any> {
        return this._http.put(this.UPDATE_USER, user).pipe(map(res => {
            return res;
        }));
    }

    public deleteUser(userId: number): Observable<any> {
        return this._http.delete(this.DELETE_USER + '/' +  userId).pipe(map(res => {
            return res;
        }));
    }

    public createRole(role: Roles): Observable<any> {
        return this._http.post(this.CREATE_ROLE, role).pipe(map(res => {
            return res;
        }));
    }

    public updateRole(role: Roles): Observable<any> {
        return this._http.put(this.UPDATE_ROLE, role).pipe(map(res => {
            return res;
        }));
    }

    public deleteRole(roleId: number): Observable<any> {
        return this._http.delete(this.DELETE_ROLE + '/' +  roleId).pipe(map(res => {
            return res;
        }));
    }

}
