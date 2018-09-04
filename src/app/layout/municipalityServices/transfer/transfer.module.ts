import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddTransferComponent} from './add-transfer/add-transfer.component';
import {ViewTransferComponent} from './view-transfer/view-transfer.component';
import {EditTransferComponent} from './edit-transfer/edit-transfer.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TransferRoutingModule } from './transfer-routing.module';
import { TransferService } from './transfer.service';
@NgModule({
  imports: [
    CommonModule, FormsModule, HttpModule, TransferRoutingModule
  ],
  declarations: [AddTransferComponent, ViewTransferComponent,EditTransferComponent],
  providers:[TransferService]
})
export class TransferModule { }
