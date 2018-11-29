import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {Router} from '@angular/router';
import {LandService} from '../land.service';
import {LandModel} from '../land-model';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-view-land',
  templateUrl: './view-land.component.html',
  styleUrls: ['./view-land.component.scss']
})
export class ViewLandComponent implements OnInit {

  landModels:Array<LandModel>;
  role:string = this.role = localStorage.getItem('role');
   temp = [];
    rows:Array<LandModel> = [];
    columns = [
      {prop:'landInfoId'},
      { prop: 'streetName' },
      { name: 'noOfAnna' },
      { name: 'priceInAana' },
      { name: 'landArea' },
      { name: 'landQuality' },
      { name: 'totalLandValue' },
         
    ];
 
    @ViewChild(DatatableComponent) table: DatatableComponent;
    @ViewChild('actionTmpl') actionTmpl: TemplateRef<any>;
 
      constructor(private router:Router, private landService:LandService) {
      this.getAllLand();
    }

    ngOnInit() {
      this.getAllLand();
    }

    getAllLand(){
      this.landService.getAllLand().subscribe(
        data=>{
          this.landModels = JSON.parse(JSON.parse(JSON.stringify(data))._body);
          this.rows = this.landModels;
          this.temp = [...this.landModels];
        }
      )
    }
    updateFilter(event) {
      const val = event.target.value.toLowerCase();
 
      // filter our data
      const temp = this.temp.filter(function(d) {
        return d.streetName.toLowerCase().indexOf(val) !== -1 || !val;
      });
 
      // update the rows
      this.rows = temp;
      // Whenever the filter changes, always go back to the first page
      this.table.offset = 0;
    }
 
   deleteLand(id){
      this.landService.deleteLand(id).subscribe(
       data=>{
          console.log("Land Deleted Sucessfully!");
         this.getAllLand();
         this.rows = this.rows.filter(item => item.landInfoId !== id);
       }
     )
    }
 
    editLand(id){
      this.router.navigateByUrl('land/editland/'+id);
   }
 
}
