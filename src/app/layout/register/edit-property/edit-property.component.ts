import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PropertyService} from '../property.service';
import {PropertyModel} from '../property-model';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.scss']
})
export class EditPropertyComponent implements OnInit {

  propertyModel: PropertyModel = new PropertyModel();
  private imageUrl:String;
  constructor(private route: ActivatedRoute, private propertyService: PropertyService,
  private router:Router) {

    this.route.params.subscribe(
      params => {
        this.propertyService.getPropertyById(params.id).subscribe(
          data => {
            this.propertyModel = JSON.parse(JSON.parse(JSON.stringify(data))._body);          
          }
        );
      }
    );
  }  

  ngOnInit() {
  }

  editProperty() {
    this.propertyService.updateProperty(this.propertyModel).subscribe(
      data => {
          this.router.navigate(['/property/viewproperty']);
      }
    );
  }

}
