import { Component, OnInit, Input } from '@angular/core';
import { House } from '../house';
import { ActivatedRoute } from '@angular/router';
import { HouseService } from '../services/house.service';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  @Input() house: House;
  id = null;
  house_selected: House;
  constructor(private route: ActivatedRoute,private houseService: HouseService) {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.house_selected = this.getHouse(this.id);
   }

  ngOnInit() {
  }

  getHouse(id:number){
    return this.houseService.getHouse(id);
  }

}
