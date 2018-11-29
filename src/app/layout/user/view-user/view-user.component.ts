import { Component, OnInit, ViewChild, TemplateRef} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import {UserModel} from '../user-model';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
 userModels:Array<UserModel>;
 role:string = this.role = localStorage.getItem('role');
  temp = [];
   rows:Array<UserModel> = [];
   columns = [
     {prop:'userId'},
     { prop: 'firstName' },
     { name: 'lastName' },
     { name: 'userName' },
     { name: 'password' },
     { name: 'email' },
     { name: 'address' },
     { name: 'phone' },
     { name: 'gender' },
     { name: 'role' }
   
   ];

   @ViewChild(DatatableComponent) table: DatatableComponent;
   @ViewChild('actionTmpl') actionTmpl: TemplateRef<any>;

     constructor(private router:Router, private userService:UserService) {
     this.getAllUsers();
   }
   ngOnInit() {
     this.getAllUsers();
   }

   getAllUsers(){
     this.userService.getAllUsers().subscribe(
       data=>{
         this.userModels = JSON.parse(JSON.parse(JSON.stringify(data))._body);
         this.rows = this.userModels;
         this.temp = [...this.userModels];
       }
     )
   }
   updateFilter(event) {
     const val = event.target.value.toLowerCase();

     // filter our data
     const temp = this.temp.filter(function(d) {
       return d.firstName.toLowerCase().indexOf(val) !== -1 || !val;
     });

     // update the rows
     this.rows = temp;
     // Whenever the filter changes, always go back to the first page
     this.table.offset = 0;
   }

  deleteUser(id){
     this.userService.deleteUser(id).subscribe(
      data=>{
         console.log("User Deleted Sucessfully!");
        this.getAllUsers();
        this.rows = this.rows.filter(item => item.userId !== id);
      }
    )
   }

   editUser(id){
     this.router.navigateByUrl('user/edituser/'+id);
  }

}
