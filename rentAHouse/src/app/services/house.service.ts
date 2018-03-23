import { Injectable } from '@angular/core';
import { House } from '../house';
import { HOUSES } from '../mock-houses';
import { Http } from '@angular/http'
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
@Injectable()
export class HouseService {

  constructor(private http:Http,private afDB: AngularFireDatabase,private route: Router) { }

  getHouses(){
    return this.afDB.list('house/');
    //return HOUSES;

  }


  getHouse(id:number){
  
    return this.afDB.object('house/' + id);

  }

  public getGeoData(direccion){

    return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + direccion);

  }
  public saveHouse(house){
    this.afDB.database.ref('house/' + house.id).set(house);
    this.route.navigate(['/rentalproperties']);

    /*{
      "rules": {
        ".read": "auth != null",
        ".write": "auth != null"
      }
    }*/
  }


}
