import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { APIConstants } from '../../shared/util/apiconstants';
@Injectable({
  providedIn: 'root'
})
export class HouseService {
  token:string;
  constructor(private http:Http) { 
    this.token = localStorage.getItem('token');
  }

  addHouse(houseModel){
    let houseAddUrl = APIConstants.HOUSE_INFO+"/save";
    let getHeaders = new Headers({'authorization':'Bearer '+this.token,'content-type':'application/json'});
      return this.http.post(houseAddUrl, houseModel, {headers: getHeaders});
  }

  updateHouse(houseModel){
    let houseUpdateUrl = APIConstants.HOUSE_INFO+"/save";
    let getHeaders = new Headers({'authorization':'Bearer '+this.token,'content-type':'application/json'});
      return this.http.put(houseUpdateUrl, houseModel, {headers: getHeaders});
  }

  getAllHouses(){
    let getAllHouseUrl = APIConstants.HOUSE_INFO+"/list";
    let getHeaders = new Headers({'authorization':'Bearer '+this.token});
    return this.http.get(getAllHouseUrl, {headers: getHeaders});
  }

  deleteHouse(id){
    let deleteHouseEndPoint = APIConstants.HOUSE_INFO+"/"+id;
    let getHeaders = new Headers({'authorization':'Bearer '+this.token});
    return this.http.delete(deleteHouseEndPoint,{headers:getHeaders});
  }

  getHouseById(id){
    let findHouseById = APIConstants.HOUSE_INFO+"/"+id;
    let getHeaders = new Headers({'authorization':'Bearer '+this.token});
    return this.http.get(findHouseById,{headers:getHeaders});
  }
  
}
