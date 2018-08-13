import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';//--

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  authenticateUser(userModel){//--

    let loginUrl="http://localhost:8080/hotel/login"//--
    let headers1=new HttpHeaders({'content-Type':'application/json' });//--
    return this.http.post(loginUrl, userModel,{headers: headers1});//--
  
  }
}
