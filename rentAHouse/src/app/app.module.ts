import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ApplicationRef  } from '@angular/core';

import {HouseService} from './services/house.service';


import { AppComponent } from './app.component';
import { RentalPropertiesComponent } from './rental-properties/rental-properties.component';
import { AppRoutingModule } from './/app-routing.module';
import { HouseDetailComponent } from './house-detail/house-detail.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    RentalPropertiesComponent,
    HouseDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBfrD_r1FtnCNeSUqyUFIw-oTjxGB43EeA'
    })
  ],
  providers: [HouseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
