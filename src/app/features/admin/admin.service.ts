import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Users} from '../../models/users';
import {Roles} from '../../models/roles';
import {UsersRolesMap} from '../../models/users-roles-map';

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

    private readonly GET_USER_ROLE_MAP_BY_USER_ID = '/core/users/role/map/byUserId';
    private readonly CREATE_USER_ROLE_MAP = '/core/users/role/map/create';
    private readonly UPDATE_USER_ROLE_MAP = '/core/users/role/map/update';
    private readonly DELETE_USER_ROLE_MAP = '/core/users/role/map/delete';

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

    public getUserRoleMapByUserId(userId: number): Observable<any> {
        return this._http.get(this.GET_USER_ROLE_MAP_BY_USER_ID + '/' + userId).pipe(map(res => {
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

    public createUserRoleMap(userRoleMap: UsersRolesMap): Observable<any> {
        return this._http.post(this.CREATE_USER_ROLE_MAP, userRoleMap).pipe(map(res => {
            return res;
        }));
    }

    public updateUserRoleMap(userRoleMap: UsersRolesMap): Observable<any> {
        return this._http.put(this.UPDATE_USER_ROLE_MAP, userRoleMap).pipe(map(res => {
            return res;
        }));
    }

    public deleteUserRoleMap(id: number): Observable<any> {
        return this._http.delete(this.DELETE_USER_ROLE_MAP + '/' + id).pipe(map(res => {
            return res;
        }));
    }

}
