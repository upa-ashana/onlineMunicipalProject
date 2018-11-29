import { Component, OnInit } from '@angular/core';
import {HouseModel} from '../house-model';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { HouseService } from '../house.service';
@Component({
  selector: 'app-edit-house',
  templateUrl: './edit-house.component.html',
  styleUrls: ['./edit-house.component.scss']
})
export class EditHouseComponent implements OnInit {

  houseModel: HouseModel = new HouseModel();
  private imageUrl:String;
  constructor(private route: ActivatedRoute, private houseService: HouseService,
  private router:Router) {

    this.route.params.subscribe(
      params => {
        this.houseService.getHouseById(params.id).subscribe(
          data => {
            this.houseModel = JSON.parse(JSON.parse(JSON.stringify(data))._body);          
          }
        );
      }
    );
  }
  

  ngOnInit() {
  }

  editHouse() {
    this.houseService.addHouse(this.houseModel).subscribe(
      data => {
          this.router.navigate(['/house/viewhouse']);
      }
    );
  }

}
