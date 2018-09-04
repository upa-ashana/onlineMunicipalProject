import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddPropertyComponent } from './add-property/add-property.component';
import { ViewPropertyComponent } from './view-property/view-property.component';
import { EditPropertyComponent } from './edit-property/edit-property.component';
 
const routes:Routes=[
  {path: '', component: AddPropertyComponent},
  {path: 'addproperty', component: AddPropertyComponent},
  {path: 'viewproperty', component: ViewPropertyComponent},
  {path: 'editproperty/:id', component: EditPropertyComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class PropertyRoutingModule { }
