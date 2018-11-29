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
  addproperty(propertyModel){
    let PropertyAddUrl = APIConstants.PROPERTY_REGISTRATION_URL+"/save";
    let getHeaders = new Headers({'authorization':'Bearer '+this.token,'content-type':'application/json'});
    return this.http.post(PropertyAddUrl, propertyModel, {headers: getHeaders});
  }

  getAllproperty(){
    let getAllPopertyUrl = APIConstants.PROPERTY_REGISTRATION_URL+"/list";
    let getHeaders = new Headers({'authorization':'Bearer '+this.token});
    return this.http.get(getAllPopertyUrl, {headers: getHeaders});
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
