import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentService } from './payment.service';
import { ViewPaymentComponent } from './view-payment/view-payment.component';
import { NgxDatatableModule, DatatableComponent } from '@swimlane/ngx-datatable';
import { EditPaymentComponent } from './edit-payment/edit-payment.component';


@NgModule({
  imports: [
    CommonModule, FormsModule, HttpModule,PaymentRoutingModule, NgxDatatableModule
  ],
  declarations: [AddPaymentComponent, ViewPaymentComponent, EditPaymentComponent],
  providers:[PaymentService]
})
export class PaymentModule { }
