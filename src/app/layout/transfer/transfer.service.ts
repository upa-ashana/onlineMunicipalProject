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
  addTransfer(transferModel){
    let transferAddUrl = APIConstants.PROPERTY_NAMSARI_URL+"/save";
    let getHeaders = new Headers({'authorization':'Bearer '+this.token,'content-type':'application/json'});
    return this.http.post(transferAddUrl, transferModel, {headers: getHeaders});
  }

  updateTransfer(transferModel){
    let transferUpdateUrl = APIConstants.PROPERTY_NAMSARI_URL+"/update";
    let getHeaders = new Headers({'authorization':'Bearer '+this.token,'content-type':'application/json'});
    return this.http.post(transferUpdateUrl, transferModel, {headers: getHeaders});
  }


  getAllTransfer(){
    let getAllTransferUrl = APIConstants.PROPERTY_NAMSARI_URL+"/list";
    let getHeaders = new Headers({'authorization':'Bearer '+this.token});
    return this.http.get(getAllTransferUrl, {headers: getHeaders});
  }

  deleteTransfer(id){
    let deleteUserEndPoint = APIConstants.PROPERTY_NAMSARI_URL+"/"+id;
    let getHeaders = new Headers({'authorization':'Bearer '+this.token});
    return this.http.delete(deleteUserEndPoint,{headers:getHeaders});
  }

  getTransferById(id){
    let findTransferById = APIConstants.PROPERTY_NAMSARI_URL+"/"+id;
    let getHeaders = new Headers({'authorization':'Bearer '+this.token});
    return this.http.get(findTransferById,{headers:getHeaders});
  }
}
