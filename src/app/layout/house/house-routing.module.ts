import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AddHouseComponent } from './add-house/add-house.component';
import { ViewHouseComponent } from './view-house/view-house.component';
import { EditHouseComponent } from './edit-house/edit-house.component';
const routes:Routes=[
  {path: '', component: AddHouseComponent},
  {path: 'addhouse', component: AddHouseComponent},
  {path: 'edithouse', component: EditHouseComponent},
  {path: 'viewhouse', component: ViewHouseComponent}
];
@NgModule({
  imports: [
    RouterModule.forChild(routes) 
  
  ],
  exports: [RouterModule]
  
})
export class HouseRoutingModule { }
