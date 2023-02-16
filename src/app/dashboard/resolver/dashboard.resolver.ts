/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ParamsResponse } from '../models/model';
import { DashboardService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class DashboardResolver implements Resolve<ParamsResponse> {
  constructor(private readonly dashboardService: DashboardService) {}
  resolve(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<ParamsResponse> {
    return this.dashboardService.params();
  }
}
