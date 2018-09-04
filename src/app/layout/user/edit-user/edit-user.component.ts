import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from '../user-model';
import { UserService } from '../user.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userModel:UserModel = new UserModel();
  
  constructor(private route:ActivatedRoute, private userService:UserService) { 
    this.route.params.subscribe(
      params =>{
        this.userService.getUserById(params.id).subscribe(
          data=>{
            this.userModel = JSON.parse(JSON.parse(JSON.stringify(data))._body);
          }
        );
      }
    );
  }

  ngOnInit() {
  }

}
