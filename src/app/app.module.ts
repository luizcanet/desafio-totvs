import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';
import { HotelSearchResultComponent } from './hotel-search-result/hotel-search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    HotelSearchComponent,
    HotelSearchResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }