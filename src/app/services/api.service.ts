import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';

import * as ROUTES from '../configs/apiRoutes';
import { UrlBuilder } from './url-builder';
import { NotificationService } from './notification.service';
import { NOTIFICATION_TYPES } from '../configs/notificationTypes';
import { notificationMessages } from '../configs/notificationMessages';
import {
  ApiTransportationItem,
  ApiTravelLetter,
  Driver,
  DriverForm, GetDataServerResponse,
  Priority,
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
  constructor(private http: HttpClient, private notification: NotificationService) {
    Object.entries(ROUTES).forEach(([key, url]) => {
      this.routes[key] = new UrlBuilder(url).url;
    });
  }

  private routes: Record<string, string> = {};
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getTransportationOfGoods(): Observable<GetDataServerResponse> {
    return this.http.get<GetDataServerResponse>(this.routes['GET_TRANSPORTATION_OF_GOODS']).pipe(
      catchError(this.handleError<GetDataServerResponse>(notificationMessages.serverError, 'getTransportationOfGoods', { readonly: true, success: false, data: [] })),
    );
  }

  getDrivers(): Observable<Driver[]> {
    return this.http.get<ServerResponse<Driver[]>>(this.routes['GET_DRIVES']).pipe(
      map(({ data }) => data),
      catchError(this.handleError<Driver[]>(notificationMessages.serverError, 'getDrivers', [])),
    );
  }

  getTransports(): Observable<Transport[]> {
    return this.http.get<ServerResponse<Transport[]>>(this.routes['GET_TRANSPORTS']).pipe(
      map(({ data }) => data),
      catchError(this.handleError<Transport[]>(notificationMessages.serverError, 'getTransports', [])),
    );
  }

  getStatuses(): Observable<Status[]> {
    return this.http.get<ServerResponse<Status[]>>(this.routes['GET_STATUSES']).pipe(
      map(({ data }) => data),
      catchError(this.handleError<Status[]>(notificationMessages.serverError, 'getStatuses', [])),
    );
  }

  getPriorities(): Observable<Priority[]> {
    return this.http.get<ServerResponse<Priority[]>>(this.routes['GET_PRIORITIES']).pipe(
      map(({ data }) => data),
      catchError(this.handleError<Priority[]>(notificationMessages.serverError, 'getPriorities', [])),
    );
  }

  getTravelLetters(ids: string[]): Observable<ApiTravelLetter> {
    return this.http.post<ServerResponse<ApiTravelLetter>>(this.routes['GET_TRAVEL_LETTERS'], null,{ params: { id: ids.join(',') } }).pipe(
        map(({ data }) => data),
        catchError(this.handleError<any>(notificationMessages.serverError, 'getTravelLetters', {})),
    )
  }

  updateTransportationOfItem(data: TransportationItem): Observable<ApiTransportationItem> {
    return this.http.post<ServerResponse<ApiTransportationItem>>(this.routes['UPDATE_TRANSPORTATION_OF_ITEM'], data, this.httpOptions).pipe(
      map(({data}) => data),
      tap(() => this.notification.add(notificationMessages.updateSuccess, NOTIFICATION_TYPES.SUCCESS)),
      catchError(this.handleError<any>(notificationMessages.updateError, 'updateTransportationOfItem', null)),
    );
  }

  addDriver(data: DriverForm): Observable<Driver> {
    return this.http.post<ServerResponse<Driver>>(this.routes['ADD_DRIVER'], data, this.httpOptions).pipe(
      map(({data}) => data),
      tap(() => this.notification.add(notificationMessages.addDriverSuccess, NOTIFICATION_TYPES.SUCCESS)),
      catchError(this.handleError<Driver>(notificationMessages.serverError, 'addDriver', {})),
    );
  }

  addTransport(data: TransportForm): Observable<Transport> {
    return this.http.post<ServerResponse<Transport>>(this.routes['ADD_TRANSPORT'], data, this.httpOptions).pipe(
      map(({data}) => data),
      tap(() => this.notification.add(notificationMessages.addTransportSuccess, NOTIFICATION_TYPES.SUCCESS)),
      catchError(this.handleError<Transport>(notificationMessages.serverError, 'addTransport', {})),
    );
  }

  setCoordinator(data: TransportationItem): Observable<TransportationItem | undefined> {
    return this.http.post<ServerResponse<TransportationItem>>(this.routes['SET_COORDINATOR'], data, this.httpOptions).pipe(
      map(({data, error}) => {
        if (error) {
          this.notification.add(notificationMessages.setCoordinatorError, NOTIFICATION_TYPES.ERROR);
          return;
        }

        this.notification.add(notificationMessages.setCoordinatorSuccess, NOTIFICATION_TYPES.SUCCESS);
        return data;
      }),
      catchError(this.handleError<undefined>(notificationMessages.serverError, 'addTransport')),
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
