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
import { ComparatorComponent } from './comparator/comparator.component';
import { SignupComponent } from './signup/signup.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { HttpModule } from '@angular/http';
import { AuthorizationService } from './services/authorization.service';
@NgModule({
  declarations: [
    AppComponent,
    RentalPropertiesComponent,
    HouseDetailComponent,
    ComparatorComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule ,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBfrD_r1FtnCNeSUqyUFIw-oTjxGB43EeA'
    }),
    
  ],
  providers: [HouseService,AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
