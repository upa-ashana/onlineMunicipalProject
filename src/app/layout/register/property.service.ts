import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { APIConstants } from '../../shared/util/apiconstants';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  token:string;
  constructor(private http:Http) { 
    this.token = localStorage.getItem('token');

  }
  addproperty(userModel){
    let userAddUrl = APIConstants.PROPERTY_REGISTRATION_URL+"/saveproperty";
    let getHeaders = new Headers({'authorization':'Bearer '+this.token});
    return this.http.post(userAddUrl, userModel, {headers: getHeaders});
  }

  getAllproperty(){
    let getAllUserUrl = APIConstants.PROPERTY_REGISTRATION_URL+"/list";
    let getHeaders = new Headers({'authorization':'Bearer '+this.token});
    return this.http.get(getAllUserUrl, {headers: getHeaders});
  }

  deleteProperty(id){
    let deleteUserEndPoint = APIConstants.PROPERTY_REGISTRATION_URL+"/"+id;
    let getHeaders = new Headers({'authorization':'Bearer '+this.token});
    return this.http.delete(deleteUserEndPoint,{headers:getHeaders});
  }

  getPropertyById(id){
    let findUserById = APIConstants.PROPERTY_REGISTRATION_URL+"/"+id;
    let getHeaders = new Headers({'authorization':'Bearer '+this.token});
    return this.http.get(findUserById,{headers:getHeaders});
  }
}
