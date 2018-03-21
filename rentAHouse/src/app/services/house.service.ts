import { Injectable } from '@angular/core';
import { House } from '../house';
import { HOUSES } from '../mock-houses';

@Injectable()
export class HouseService {

  constructor() { }

  getHouses(){
    return HOUSES;

  }


  getHouse(id:number){
    return HOUSES.find(number => number.id === id);
  }

}
