import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ActionRequest,
  ParamsResponse,
  ProcessResponse,
  TypeRequest,
} from '../../models/model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private readonly http: HttpClient) {}

  params(): Observable<ParamsResponse> {
    const action: ActionRequest = { action: TypeRequest.params };
    return this.http.post<ParamsResponse>('api/', action);
  }

  process(): Observable<ProcessResponse> {
    const action: ActionRequest = { action: TypeRequest.process };
    return this.http.post<ProcessResponse>('api/', action);
  }
}
