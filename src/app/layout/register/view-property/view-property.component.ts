import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {Router} from '@angular/router';
import {PropertyService} from '../property.service';
import {PropertyModel} from '../property-model';
import { DatatableComponent } from '@swimlane/ngx-datatable';
@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.scss']
})
export class ViewPropertyComponent implements OnInit {

   propertyModels:Array<PropertyModel>;
  role:string = this.role = localStorage.getItem('role');

  temp = [];
  rows:Array<PropertyModel> = [];
  columns = [
    {prop:'propertyRegistrationId'},
    { prop: 'ownerName' },
    { name: 'citizonNo' },
    { name: 'phoneNo' },
    { name: 'region' },
    { name: 'wardNo' },
    { name: 'kittaNo' },
    { name: 'houseNo' },
    { name: 'noOfRoom' },
    { name: 'noOfFlat' },
    { name: 'houseArea' },
    { name: 'landArea' },
    { name: 'noOfAnna' },
    {name:  'streetName'},
    { name: 'registerDate' },
    { name: 'registrationFee' },
    { name: 'ownerSignature' },
    {name:  'wardsachibSignature'},
    {name:  'userRegisterPropertyList'}
   
  ];

  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('actionTmpl') actionTmpl: TemplateRef<any>;

constructor(private router:Router, private propertyService:PropertyService) {
  this.getAllProperty();
}
ngOnInit() {
  this.getAllProperty();
}

getAllProperty(){
  this.propertyService.getAllproperty().subscribe(
    data=>{
      this.propertyModels = JSON.parse(JSON.parse(JSON.stringify(data))._body);
      this.rows = this.propertyModels;
      this.temp = [...this.propertyModels];
    }
  )
}
updateFilter(event) {
  const val = event.target.value.toLowerCase();

  // filter our data
  const temp = this.temp.filter(function(d) {
    return d.ownerName.toLowerCase().indexOf(val) !== -1 || !val;
  });

  // update the rows
  this.rows = temp;
  // Whenever the filter changes, always go back to the first page
  this.table.offset = 0;
}

deleteProperty(id){
  this.propertyService.deleteProperty(id).subscribe(
    data=>{
      console.log("Property Deleted Sucessfully!");
      this.getAllProperty();
       this.rows = this.rows.filter(item => item.propertyRegistrationId !== id);
    }
  )
}

editProperty(id){
  this.router.navigateByUrl('property/editproperty/'+id);
}

 

}
