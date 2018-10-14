import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../hotel';

@Component({
  selector: '.hotel-search-result',
  templateUrl: './hotel-search-result.component.html',
  styleUrls: ['./hotel-search-result.component.css']
})
export class HotelSearchResultComponent implements OnInit {
  @Input() hotel: Hotel;

  showDetail = false;
  showDialog = false;

  constructor() { }

  ngOnInit() {
  }

  toggleDetail() {
    this.showDetail = !this.showDetail;
  }

  openDialog() {
    this.showDialog = true;
  }

  closeDialog() {
    this.showDialog = false;
  }

}
