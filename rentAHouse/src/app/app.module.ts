import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HouseService} from './services/house.service';


import { AppComponent } from './app.component';
import { RentalPropertiesComponent } from './rental-properties/rental-properties.component';
import { AppRoutingModule } from './/app-routing.module';
import { HouseDetailComponent } from './house-detail/house-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    RentalPropertiesComponent,
    HouseDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HouseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
