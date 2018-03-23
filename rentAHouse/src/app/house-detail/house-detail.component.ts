import { Component, OnInit, Input } from '@angular/core';
import { House } from '../house';
import { ActivatedRoute, Router } from '@angular/router';
import { HouseService } from '../services/house.service';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  @Input() house: House;
  id = null;
  house_selected:any = {};
  my_boolean: string = 'information';
  current_route:string;
  show_info:boolean;
  constructor(private route: ActivatedRoute,private houseService: HouseService, private router: Router) {

    this.current_route = this.router.url;
    this.show_info = true;
    console.log(this.current_route);
   }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getHouse(this.id).valueChanges()
    .subscribe(house => {
      this.house_selected = house;});
  }

  getHouse(id:number){
    return this.houseService.getHouse(id);
  }



}
