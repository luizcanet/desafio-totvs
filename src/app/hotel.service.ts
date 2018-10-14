import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hotel } from './hotel';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private hotelsUrl = 'api/hotels';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** Log a HotelService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HotelService: ${message}`);
  }

  @Output() submit: EventEmitter<string> = new EventEmitter();

  /* GET hotels whose name contains search term */
  searchHotels(term: string): Observable<Hotel[]> {
    if (!term.trim()) {
      // if not search term, return empty hotel array.
      return of([]);
    }
    return this.http.get<Hotel[]>(`${this.hotelsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found hotels matching "${term}"`)),
      catchError(this.handleError<Hotel[]>('searchHotels', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
