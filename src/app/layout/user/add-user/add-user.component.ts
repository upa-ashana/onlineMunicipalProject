import { Component, OnInit } from '@angular/core';
import { UserModel } from '../user-model';
import { UserService } from '../user.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userModel:UserModel = new UserModel();

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  addUser(){
    this.userService.addUser(this.userModel).subscribe(
      data=>{
        console.log(data);
        let added = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(added);
    }
    )
  }

}
