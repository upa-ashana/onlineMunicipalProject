import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { APIConstants } from '../../shared/util/apiconstants';

@Injectable({
  providedIn: 'root'
})
export class LandService {
  token:string;
  constructor(private http:Http) { 
    this.token = localStorage.getItem('token');
  }
 
  addLand(landModel){
    let landAddUrl = APIConstants.LAND_INFO+"/save";
    let getHeaders = new Headers({'authorization':'Bearer '+this.token,'content-type':'application/json'});
      return this.http.post(landAddUrl,landModel, {headers: getHeaders});
  }

  updateLand(landModel){
    console.log(landModel)
    let landUpdateUrl = APIConstants.LAND_INFO+"/update";
    let getHeaders = new Headers({'authorization':'Bearer '+this.token,'content-type':'application/json'});
      return this.http.put(landUpdateUrl,landModel, {headers: getHeaders});
  }

  getAllLand(){
    let getAllLandUrl = APIConstants.LAND_INFO+"/list";
    let getHeaders = new Headers({'authorization':'Bearer '+this.token});
    return this.http.get(getAllLandUrl, {headers: getHeaders});
  }

  deleteLand(id){
    let deleteLandEndPoint = APIConstants.LAND_INFO+"/"+id;
    let getHeaders = new Headers({'authorization':'Bearer '+this.token});
    return this.http.delete(deleteLandEndPoint,{headers:getHeaders});
  }

  getLandById(id){
    let findLandById = APIConstants.LAND_INFO+"/"+id;
    let getHeaders = new Headers({'authorization':'Bearer '+this.token});
    return this.http.get(findLandById,{headers:getHeaders});
  }
  
}
