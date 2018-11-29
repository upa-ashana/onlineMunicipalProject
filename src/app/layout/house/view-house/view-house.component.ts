import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {Router} from '@angular/router';
import {HouseService} from '../house.service';
import {HouseModel} from '../house-model';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-view-house',
  templateUrl: './view-house.component.html',
  styleUrls: ['./view-house.component.scss']
})
export class ViewHouseComponent implements OnInit {

  houseModels:Array<HouseModel>;
 role:string = this.role = localStorage.getItem('role');
  temp = [];
   rows:Array<HouseModel> = [];
   columns = [
     {prop:'houseInfoId'},
     { prop: 'houseNo' },
     { name: 'wardNo' },
     { name: 'streetName' },
     { name: 'houseArea' },
     { name: 'housePrice' },
     { name: 'totalHouseValue' },
        
   ];

   @ViewChild(DatatableComponent) table: DatatableComponent;
   @ViewChild('actionTmpl') actionTmpl: TemplateRef<any>;

     constructor(private router:Router, private houseService:HouseService) {
     this.getAllHouse();
   }
   ngOnInit() {
     this.getAllHouse();
   }

   getAllHouse(){
     this.houseService.getAllHouses().subscribe(
       data=>{
         this.houseModels = JSON.parse(JSON.parse(JSON.stringify(data))._body);
         this.rows = this.houseModels;
         this.temp = [...this.houseModels];
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

  deleteHouse(id){
     this.houseService.deleteHouse(id).subscribe(
      data=>{
         console.log("User Deleted Sucessfully!");
        this.getAllHouse();
        this.rows = this.rows.filter(item => item.houseInfoId !== id);
      }
    )
   }

   editUser(id){
     this.router.navigateByUrl('house/edithouse/'+id);
  }

}



