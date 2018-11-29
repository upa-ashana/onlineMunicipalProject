import { Component, OnInit,ViewChild, TemplateRef } from '@angular/core';
import {PaymentModel} from '../payment-model';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import {PaymentService} from '../payment.service';
import  {Router} from '@angular/router';
@Component({
  selector: 'app-view-payment',
  templateUrl: './view-payment.component.html',
  styleUrls: ['./view-payment.component.scss']
})
export class ViewPaymentComponent implements OnInit {
  paymentModels:Array<PaymentModel>;
  role:string = this.role = localStorage.getItem('role');
   temp = [];
    rows:Array<PaymentModel> = [];
    columns = [
      {prop:'propertyTaxPaymentId'},
      { prop: 'paymentType' },
      { name: 'currentYearAmount' },
      { name: 'dueAmount' },
      { name: 'totalPaymentAmount' },
      { name: 'paymentDate' }      
    
    ];
 
    @ViewChild(DatatableComponent) table: DatatableComponent;
    @ViewChild('actionTmpl') actionTmpl: TemplateRef<any>;
    constructor(private router:Router, private paymentService:PaymentService) {
      this.getAllPayment();
    }

  ngOnInit() {
    this.getAllPayment();
  }

  getAllPayment(){
    this.paymentService.getAllPayment().subscribe(
      data=>{
        this.paymentModels = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.rows = this.paymentModels;
        this.temp = [...this.paymentModels];
      }
    )
  }
  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.paymentType.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

 deletePayment(id){
    this.paymentService.deletePayment(id).subscribe(
     data=>{
        console.log("payment Deleted Sucessfully!");
       this.getAllPayment();
       this.rows = this.rows.filter(item => item.propertyTaxPaymentId !== id);
     }
   )
  }

  editPayment(id){
    this.router.navigateByUrl('payment/editpayment/'+id);
 }

}
