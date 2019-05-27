import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {map} from 'rxjs-compat/operator/map';

@Injectable()
export class NavbarService {
    constructor(
        private _http: HttpClient
    ) {}
}
