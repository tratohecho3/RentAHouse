import { Component, OnInit } from '@angular/core';
import { HouseService } from '../services/house.service';
import { House } from '../house';

@Component({
  selector: 'app-rental-properties',
  templateUrl: './rental-properties.component.html',
  styleUrls: ['./rental-properties.component.css']
})
export class RentalPropertiesComponent implements OnInit {

  houses= null;
  constructor(private houseService: HouseService) { 
    houseService.getHouses().valueChanges()
      .subscribe(houses => {
        this.houses = houses;
        console.log(this.houses);
      });
    

  }

  ngOnInit() {
  }



}
