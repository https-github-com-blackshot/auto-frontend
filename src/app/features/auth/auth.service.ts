import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Users} from '../../models/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly GET_USER_BY_USERNAME_AND_PASSWORD = '/core/auth';
  private readonly GET_USER_ROLE_MAP_BY_USER_ID = '/core/users/role/map/byUserId';
  private readonly CREATE_USER = '/core/users/register';

  constructor(
      private _http: HttpClient
  ) { }

  public registerNewUser(user: Users): Observable<any> {
    return this._http.post(this.CREATE_USER, user).pipe(map( res => {
      return res;
    }));
  }

  public getUserByUsernameAndPassword(username: string, password: string): Observable<any> {
    return this._http.get(this.GET_USER_BY_USERNAME_AND_PASSWORD + '/' + username + '/' + password).pipe(map(res => {
      return res;
    }));
  }

  public getUserRoleMapByUserId(userId: string): Observable<any> {
    return this._http.get(this.GET_USER_ROLE_MAP_BY_USER_ID + '/' + userId).pipe(map( res => {
      return res;
    }));
  }



}
