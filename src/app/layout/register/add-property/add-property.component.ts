import { Component, OnInit } from '@angular/core';
import { PropertyModel } from '../property-model';
import { PropertyService } from '../property.service';
@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  propertyModel:PropertyModel = new PropertyModel();

  constructor(private userService:PropertyService) { }

  ngOnInit() {
  }
  addProperty(){
    this.userService.addproperty(this.propertyModel).subscribe(
      data=>{
        console.log(data);
        let added = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(added);
    }
    )
  }

}
