import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AddLandComponent } from './add-land/add-land.component';
import { ViewLandComponent } from './view-land/view-land.component';
import { EditLandComponent } from './edit-land/edit-land.component';
const routes:Routes=[
  {path: '', component: AddLandComponent},
  {path: 'addhouse', component: AddLandComponent},
  {path: 'edithouse', component: EditLandComponent},
  {path: 'viewuser', component: ViewLandComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes) ],
  exports: [RouterModule]
  
})
export class LandRoutingModule { }
