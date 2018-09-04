import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
//import {Observable}     from 'rxjs/Observable';
import { APIConstants } from '../../shared/util/apiconstants';
@Injectable()
export class UserService {

  token:string;
  constructor(private http:Http) { 
    this.token = localStorage.getItem('token');

  }
  addUser(userModel){
    let userAddUrl = APIConstants.REST_BASE_URL+"/save";
    let getHeaders = new Headers({'authorization':'Bearer '+this.token});
    return this.http.post(userAddUrl, userModel, {headers: getHeaders});
  }

  getAllUsers(){
    let getAllUserUrl = APIConstants.USER_URL+"/list";
    let getHeaders = new Headers({'authorization':'Bearer '+this.token});
    return this.http.get(getAllUserUrl, {headers: getHeaders});
  }

  deleteUser(id){
    let deleteUserEndPoint = APIConstants.USER_URL+"/"+id;
    let getHeaders = new Headers({'authorization':'Bearer '+this.token});
    return this.http.delete(deleteUserEndPoint,{headers:getHeaders});
  }

  getUserById(id){
    let findUserById = APIConstants.USER_URL+"/"+id;
    let getHeaders = new Headers({'authorization':'Bearer '+this.token});
    return this.http.get(findUserById,{headers:getHeaders});
  }
}
