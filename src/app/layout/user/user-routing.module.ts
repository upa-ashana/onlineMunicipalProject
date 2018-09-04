import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
 
const routes:Routes=[
  {path: '', component: AddUserComponent},
  {path: 'adduser', component: AddUserComponent},
  {path: 'viewuser', component: ViewUserComponent},
  {path: 'edituser/:id', component: EditUserComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes) ],
  exports: [RouterModule]
  
})
export class UserRoutingModule { }
