import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
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
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ParamsResponse> {
    return this.dashboardService.params();
  }
}
