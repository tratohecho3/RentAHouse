import { Component, OnInit } from '@angular/core';
import { House } from '../house';
import { HouseService } from '../services/house.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  house: House = {id:null, name: null, price: null,description:null,street:null, city: null, country:null,type: null, img: null,lat:null,lng:null};
  constructor(private houseService: HouseService) { }

  ngOnInit() {
  }



  saveHouse(){
    let direction = this.house.street + "," + this.house.city + "," + this.house.country;
    this.houseService.getGeoData(direction)
    .subscribe(result => {
        
      this.house.lat  = result.json().results[0].geometry.location.lat;
      this.house.lng = result.json().results[0].geometry.location.lng;
      this.house.id = Date.now();
      this.houseService.saveHouse(this.house);
    });


  }
}