import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {LoginService} from './login.service';
import {error} from 'util';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router, private loginService:LoginService) {}
    private userModel={'userName':'','password':''};
    private token = {'token':'','value':''};

    ngOnInit() {}

    onLoggedin() {//-- hello i am true now
       
        this.loginService.authenticateUser(this.userModel).subscribe(data=>{
            console.log(data);
            this.token = JSON.parse(JSON.stringify(data));
            localStorage.setItem("token",this.token.value);
        },
        error=>{
            console.log(error);
 
             }
         )
     }
}
