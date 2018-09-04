import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddPropertyComponent} from './add-property/add-property.component';
import {ViewPropertyComponent} from './view-property/view-property.component';
import {EditPropertyComponent} from './edit-property/edit-property.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PropertyRoutingModule } from './property-routing.module';
import { PropertyService } from './property.service';
@NgModule({
  imports: [
    CommonModule, FormsModule, HttpModule, PropertyRoutingModule
  ],
  declarations: [AddPropertyComponent, ViewPropertyComponent, EditPropertyComponent ],
  providers:[PropertyService]
})
export class PropertyModule { }
