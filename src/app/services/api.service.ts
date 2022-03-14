import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';

import * as ROUTES from '../configs/apiRoutes';
import { NotificationService } from './notification.service';
import { NOTIFICATION_TYPES } from '../configs/notification-types';
import { notificationMessages } from '../configs/notificationMessages';
import {
  ApiTransportationItem,
  Driver,
  DriverForm,
  ServerResponse,
  Status,
  Transport,
  TransportationItem,
  TransportForm
} from '../type';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient, private notification: NotificationService) {}

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getTransportationOfGoods(): Observable<ApiTransportationItem[]> {
    return this.http.get<ServerResponse<ApiTransportationItem[]>>(ROUTES.GET_TRANSPORTATION_OF_GOODS).pipe(
      map(({ data }) => data),
      catchError(this.handleError<ApiTransportationItem[]>(notificationMessages.serverError, 'getTransportationOfGoods', [])),
    );
  }

  getDrivers(): Observable<Driver[]> {
    return this.http.get<ServerResponse<Driver[]>>(ROUTES.GET_DRIVES).pipe(
      map(({ data }) => data),
      catchError(this.handleError<Driver[]>(notificationMessages.serverError, 'getDrivers', [])),
    );
  }

  getTransports(): Observable<Transport[]> {
    return this.http.get<ServerResponse<Transport[]>>(ROUTES.GET_TRANSPORTS).pipe(
      map(({ data }) => data),
      catchError(this.handleError<Transport[]>(notificationMessages.serverError, 'getTransports', [])),
    );
  }

  getStatuses(): Observable<Status[]> {
    return this.http.get<ServerResponse<Status[]>>(ROUTES.GET_STATUSES).pipe(
      map(({ data }) => data),
      catchError(this.handleError<Status[]>(notificationMessages.serverError, 'getStatuses', [])),
    );
  }

  updateTransportationOfItem(data: TransportationItem): Observable<ApiTransportationItem> {
    return this.http.post<ServerResponse<ApiTransportationItem>>(ROUTES.UPDATE_TRANSPORTATION_OF_ITEM, data, this.httpOptions).pipe(
      map(({data}) => data),
      tap(() => this.notification.add(notificationMessages.updateSuccess, NOTIFICATION_TYPES.SUCCESS)),
      catchError(this.handleError<any>(notificationMessages.updateError, 'updateTransportationOfItem', null)),
    );
  }

  addDriver(data: DriverForm): Observable<Driver> {
    return this.http.post<ServerResponse<Driver>>(ROUTES.ADD_DRIVER, data, this.httpOptions).pipe(
      map(({data}) => data),
      tap(() => this.notification.add(notificationMessages.addDriverSuccess, NOTIFICATION_TYPES.SUCCESS)),
      catchError(this.handleError<Driver>(notificationMessages.serverError, 'addDriver', {})),
    );
  }

  addTransport(data: TransportForm): Observable<Transport> {
    return this.http.post<ServerResponse<Transport>>(ROUTES.ADD_TRANSPORT, data, this.httpOptions).pipe(
      map(({data}) => data),
      tap(() => this.notification.add(notificationMessages.addTransportSuccess, NOTIFICATION_TYPES.SUCCESS)),
      catchError(this.handleError<Transport>(notificationMessages.serverError, 'addTransport', {})),
    );
  }

  private handleError<T>(message: string, operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.notification.add(message, NOTIFICATION_TYPES.ERROR);
      this.log(`${operation} failed: ${error.message}`, 'error');

      return of(result as T);
    };
  }

  private log(message: string, type = 'log'): void {
    (console as Record<string, any>)[type](`ApiService: ${message}`);
  }
}
