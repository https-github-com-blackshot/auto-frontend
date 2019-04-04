import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {map} from 'rxjs/operators';

@Injectable()
export class ServiceMaintenanceService {

  private readonly GET_ALL_USERS = 'http://localhost:8080/core/users/read';

  constructor(
      private _http: HttpClient
  ) { }

  public getAllUsers(): Observable<any> {
    return this._http.get(this.GET_ALL_USERS).pipe(map(res => {
      return res;
    }));
  }

}
