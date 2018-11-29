import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModule } from '../form/form.module';
import { HttpModule } from '@angular/http';
import { LandRoutingModule } from './land-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AddLandComponent } from './add-land/add-land.component';
import { ViewLandComponent } from './view-land/view-land.component';
import { EditLandComponent } from './edit-land/edit-land.component';
import { LandService } from './land.service';


@NgModule({
  imports: [
    CommonModule, FormModule, HttpModule, LandRoutingModule, NgxDatatableModule
  ],
  declarations: [AddLandComponent, ViewLandComponent, EditLandComponent],
  providers:[LandService]
})
export class LandModule { }
