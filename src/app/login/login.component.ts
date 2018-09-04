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
    private token = {'token':'','userId':''};

    ngOnInit() {}

    onLoggedin() {//-- 
       
        this.loginService.authenticateUser(this.userModel).subscribe(data=>{
            console.log(data);
            this.token = JSON.parse(JSON.stringify(data));
            localStorage.setItem("token",this.token.token);
            localStorage.setItem("currentUserId",this.token.userId);
            localStorage.setItem("isLoggedin",'true');
            this.router.navigateByUrl('dashboard');
        },
        error=>{
            console.log(error);
 
             }
         )
     }
}
