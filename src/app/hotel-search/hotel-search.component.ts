import { Component, OnInit, Input } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: '.hotel-search-widget',
  templateUrl: './hotel-search.component.html',
  styleUrls: [ './hotel-search.component.css' ]
})
export class HotelSearchComponent implements OnInit {
  hotels$: Observable<Hotel[]>;
  private searchTerms = new Subject<string>();

  onSubmit(term) {
    this.hotelService.submit.emit(term);
  }

  constructor(private hotelService: HotelService) {

  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {

    this.hotels$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.hotelService.searchHotels(term))
    );
  }
}
