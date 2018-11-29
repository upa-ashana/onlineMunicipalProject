import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { ViewPaymentComponent } from './view-payment/view-payment.component';
import { EditPaymentComponent } from './edit-payment/edit-payment.component';
 
const routes:Routes=[
  {path: '', component: AddPaymentComponent},
  {path: 'addpayment', component: AddPaymentComponent},
  {path: 'viewpayment', component: ViewPaymentComponent},
  {path: 'editpayment/:id', component: EditPaymentComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes) ],
  exports: [RouterModule]
  
})
export class PaymentRoutingModule { }
