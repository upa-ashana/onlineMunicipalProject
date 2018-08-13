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

    ngOnInit() {}

    onLoggedin() {//--
       
        this.loginService.authenticateUser(this.userModel).subscribe(data=>{
            console.log(JSON.parse(JSON.stringify(data))._body)
            localStorage.setItem("token",JSON.parse(JSON.stringify(data))._body);
        },
        error=>{
            console.log(error);
 
             }
         )
     }
}
