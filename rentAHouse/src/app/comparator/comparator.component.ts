import { Component, OnInit } from '@angular/core';
import { HouseService } from '../services/house.service';
import { House } from '../house';


@Component({
  selector: 'app-comparator',
  templateUrl: './comparator.component.html',
  styleUrls: ['./comparator.component.css']
})
export class ComparatorComponent implements OnInit {

  houses=null;
  lat: number = 4.6;
  lng: number = -74.0;
  constructor(private houseService: HouseService) { 
    houseService.getHouses().valueChanges()
      .subscribe(houses => {
        this.houses = houses;
      });
    
    console.log(this.houses);
  }

  ngOnInit() {
  }


}



