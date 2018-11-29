import { Component, OnInit,ViewChild, TemplateRef } from '@angular/core';
import {Router} from '@angular/router';
import {TransferService} from '../transfer.service';
import {TransferModel} from '../transfer-model';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-view-transfer',
  templateUrl: './view-transfer.component.html',
  styleUrls: ['./view-transfer.component.scss']
})
export class ViewTransferComponent implements OnInit {

  transferModels:Array<TransferModel>
   role:string = this.role = localStorage.getItem('role');

   temp = [];
   rows:Array<TransferModel> = [];
   columns = [
     {prop:'propertyNamsariId'},
     { prop: 'giverName' },
     { name: 'giverCitizenNo' },
     { name: 'giverMobileNo' },
     { name: 'giverRegion' },
     { name: 'giverWardNo' },
     { name: 'giverSignature' },
     { name: 'takerName' },
     { name: 'takerMobileNo' },
     { name: 'takerCitizenNo' },
     { name: 'takerRegion' },
     { name: 'takerWardNo' },
     { name: 'takerSignature' },
     {name:  'kittaNo'},
     { name: 'houseNo' },
     { name: 'houseArea'},
     {name : 'landArea'},
     { name: 'noOfAnna'},
     {name : 'date'},
     {name : 'transferFee'},
     {name:  'wardsachibSignature'},
     {name:  'userDoNamsariList'}
   
   ];

   @ViewChild(DatatableComponent) table: DatatableComponent;
   @ViewChild('actionTmpl') actionTmpl: TemplateRef<any>;

 constructor(private router:Router, private transferService:TransferService) {
   this.getAllTransfer();
 }
 ngOnInit() {
   this.getAllTransfer();
 }

 getAllTransfer(){
   this.transferService.getAllTransfer().subscribe(
     data=>{
       this.transferModels = JSON.parse(JSON.parse(JSON.stringify(data))._body);
       this.rows = this.transferModels;
       this.temp = [...this.transferModels];
     }
   )
 }
 updateFilter(event) {
   const val = event.target.value.toLowerCase();

   // filter our data
  const temp = this.temp.filter(function(d) {
     return d.giverName.toLowerCase().indexOf(val) !== -1 || !val;
   });

   // update the rows
   this.rows = temp;
   // Whenever the filter changes, always go back to the first page
   this.table.offset = 0;
 }

 deleteTransfer(id){
   this.transferService.deleteTransfer(id).subscribe(
     data=>{
       console.log("Property transfer Deleted Sucessfully!");
       this.getAllTransfer();
       // this.rows = this.rows.filter(item => item.propertyNamsariId !== id);
     }
   )
 }

 editTransfer(id){
   this.router.navigateByUrl('transfer/edittransfer/'+id);
 }

 

}
