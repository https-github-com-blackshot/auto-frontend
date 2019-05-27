import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Users} from '../../models/users';
import {Roles} from '../../models/roles';
import {ServiceBook} from '../../models/service-book';

@Injectable()
export class UserProfileService {
    private readonly GET_ALL_USERS = 'core/users/read';
    private readonly GET_USER_BY_ID = 'core/users/byId';
    private readonly UPDATE_USER = 'core/users/update';
    private readonly GET_ALL_SERVICE_BOOK = 'core/serviceBook/read';
    private readonly CREATE_SERVICE_BOOK = 'core/serviceBook/create';
    constructor(
        private _http: HttpClient
    ) {}
    public getUserById(userId: string): Observable<any> {
        return this._http.get(this.GET_USER_BY_ID + '/' + userId).pipe(map(res => {
            return res;
        }));
    }
    public getAllUsers(): Observable<any> {
        return this._http.get(this.GET_ALL_USERS).pipe(map(res => {
            return res;
        }));
    }

    public updateUser(user: Users): Observable<any> {
        return this._http.put(this.UPDATE_USER, user).pipe(map(res => {
            return res;
        }));
    }
    public getAllServiceBook(): Observable<any> {
        return this._http.get(this.GET_ALL_SERVICE_BOOK).pipe(map(res => {
            return res;
        }));
    }
    public addServiceBook(serviceBook: ServiceBook): Observable<any> {
        return this._http.post(this.CREATE_SERVICE_BOOK, serviceBook).pipe(map(res => {
            return res;
        }));
    }


}

