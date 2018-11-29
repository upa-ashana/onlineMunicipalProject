import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModule } from '../form/form.module';
import { HttpModule } from '@angular/http';
import { HouseRoutingModule } from './house-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AddHouseComponent } from './add-house/add-house.component';
import { EditHouseComponent } from './edit-house/edit-house.component';
import { ViewHouseComponent } from './view-house/view-house.component';
import { HouseService } from './house.service';

@NgModule({
  imports: [
    CommonModule, FormModule, HttpModule, HouseRoutingModule, NgxDatatableModule 
  ],
  declarations: [AddHouseComponent, EditHouseComponent, ViewHouseComponent],
  providers:[HouseService]
})
export class HouseModule { }
