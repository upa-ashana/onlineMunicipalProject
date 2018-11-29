import { Component, OnInit } from '@angular/core';
import { LandModel } from '../land-model';
import { ActivatedRoute, Router } from '@angular/router';
import { LandService } from '../land.service';

@Component({
  selector: 'app-edit-land',
  templateUrl: './edit-land.component.html',
  styleUrls: ['./edit-land.component.scss']
})
export class EditLandComponent implements OnInit {

  landModel: LandModel = new LandModel();
  private imageUrl:String;
  constructor(private route: ActivatedRoute, private landService: LandService ,
  private router:Router) {

    this.route.params.subscribe(
      params => {
        this.landService.getLandById(params.id).subscribe(
          data => {
            this.landModel = JSON.parse(JSON.parse(JSON.stringify(data))._body);          
          }
        );
      }
    );
  }

  ngOnInit() {
  }

  editLand() {
    this.landService.addLand(this.landModel).subscribe(
      data => {
          this.router.navigate(['/land/viewland']);
      }
    );
  }

}
