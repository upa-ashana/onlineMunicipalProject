import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddTransferComponent } from './add-transfer/add-transfer.component';
import { ViewTransferComponent } from './view-transfer/view-transfer.component';
import { EditTransferComponent } from './edit-transfer/edit-transfer.component';
 
const routes:Routes=[
  {path: '', component: AddTransferComponent},
  {path: 'addproperty', component: AddTransferComponent},
  {path: 'viewproperty', component: ViewTransferComponent},
  {path: 'editproperty/:id', component: EditTransferComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class TransferRoutingModule { }
