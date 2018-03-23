import { Injectable } from '@angular/core';
import { House } from '../house';
import { HOUSES } from '../mock-houses';
//import { Http } from '@angular/http'

@Injectable()
export class HouseService {

  constructor() { }

  getHouses(){
    return HOUSES;

  }


  getHouse(id:number){
    return HOUSES.find(number => number.id === id);
  }
/*
  public getGeoData(direccion){

    return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + direccion);

  }*/

}
