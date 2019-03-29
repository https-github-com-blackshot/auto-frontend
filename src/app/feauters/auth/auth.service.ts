import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly GET_USER_BY_USERNAME_AND_PASSWORD = '/core/auth';

  constructor(
      private _http: HttpClient
  ) { }

  public getUserByUsernameAndPassword(username: string, password: string): Observable<any> {
    return this._http.get(this.GET_USER_BY_USERNAME_AND_PASSWORD + '/' + username + '/' + password).pipe(map(res => {
      return res;
    }));
  }

}
