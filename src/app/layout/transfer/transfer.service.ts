import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { APIConstants } from '../../shared/util/apiconstants';
@Injectable({
  providedIn: 'root'
})
export class TransferService {

  token:string;
  constructor(private http:Http) { 
    this.token = localStorage.getItem('token');

  }
  addTransfer(userModel){
    let userAddUrl = APIConstants.PROPERTY_NAMSARI_URL+"/saveTransfer";
    let getHeaders = new Headers({'authorization':'Bearer '+this.token});
    return this.http.post(userAddUrl, userModel, {headers: getHeaders});
  }

  getAllTransfers(){
    let getAllUserUrl = APIConstants.PROPERTY_NAMSARI_URL+"/list";
    let getHeaders = new Headers({'authorization':'Bearer '+this.token});
    return this.http.get(getAllUserUrl, {headers: getHeaders});
  }

  deleteTransfer(id){
    let deleteUserEndPoint = APIConstants.PROPERTY_NAMSARI_URL+"/"+id;
    let getHeaders = new Headers({'authorization':'Bearer '+this.token});
    return this.http.delete(deleteUserEndPoint,{headers:getHeaders});
  }

  getTransferById(id){
    let findUserById = APIConstants.PROPERTY_NAMSARI_URL+"/"+id;
    let getHeaders = new Headers({'authorization':'Bearer '+this.token});
    return this.http.get(findUserById,{headers:getHeaders});
  }
}
