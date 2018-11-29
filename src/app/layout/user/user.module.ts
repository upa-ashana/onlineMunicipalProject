import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from './user.service';
import { ViewUserComponent } from './view-user/view-user.component';
import { NgxDatatableModule, DatatableComponent } from '@swimlane/ngx-datatable';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  imports: [
    CommonModule, FormsModule, HttpModule,UserRoutingModule, NgxDatatableModule
  ],
  declarations: [AddUserComponent, ViewUserComponent, EditUserComponent],
  providers:[UserService]
})
export class UserModule { }
