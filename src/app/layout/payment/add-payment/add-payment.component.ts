import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import {PaymentModel} from '../payment-model';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss']
})
export class AddPaymentComponent implements OnInit {
  paymentModel:PaymentModel = new PaymentModel();
  constructor(private paymentService:PaymentService){ }

  ngOnInit() {
  }

  addPayment(){
    this.paymentService.addPayment(this.paymentModel).subscribe(
      data=>{
        console.log(data);
        let added = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(added);
    }
    )
  }
}
