import { Component, OnInit } from '@angular/core';
import { PaymentModel } from '../payment-model';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../payment.service';
@Component({
  selector: 'app-edit-payment',
  templateUrl: './edit-payment.component.html',
  styleUrls: ['./edit-payment.component.scss']
})
export class EditPaymentComponent implements OnInit {
  paymentModel: PaymentModel = new PaymentModel();
  private imageUrl:String;
  constructor(private route: ActivatedRoute, private paymentService: PaymentService,
    private router:Router) {
  
      this.route.params.subscribe(
        params => {
          this.paymentService.getPaymentById(params.id).subscribe(
            data => {
              console.log(data)
              this.paymentModel = JSON.parse(JSON.parse(JSON.stringify(data))._body);          
            }
          );
        }
      );
    }

  ngOnInit() {
  }

  editPayment() {
    this.paymentService.updatePayment(this.paymentModel).subscribe(
      data => {
          this.router.navigate(['/payment/viewpayment']);
      }
    );
  }
}
