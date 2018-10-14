import { Component, OnInit } from '@angular/core';

import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: '.hotel-search-results',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotels: Hotel[];

  hasSearch = false;

  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.hotelService.submit.subscribe(term => {
      this.hotelService.searchHotels(term).subscribe(hotels => this.hotels = hotels);
      this.hasSearch = true;
    });
  }
}
