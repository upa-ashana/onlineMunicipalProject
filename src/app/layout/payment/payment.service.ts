import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
//import {Observable}     from 'rxjs/Observable';
import { APIConstants } from '../../shared/util/apiconstants';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  token:string;
  constructor(private http:Http) { 
    this.token = localStorage.getItem('token');

  }

  addPayment(paymentModel){
    let paymentAddUrl = APIConstants.PROPERTY_TAX_PAYMENT_URL+"/save";
    let getHeaders = new Headers({'authorization':'Bearer '+this.token,'content-type':'application/json'});
      return this.http.post(paymentAddUrl, paymentModel, {headers: getHeaders});
  }

  updatePayment(paymentModel){
    let paymentUpdateUrl = APIConstants.PROPERTY_TAX_PAYMENT_URL+"/update";
    let getHeaders = new Headers({'authorization':'Bearer '+this.token,'content-type':'application/json'});
      return this.http.post(paymentUpdateUrl, paymentModel, {headers: getHeaders});
  }


  getAllPayment(){
    let getAllPaymentUrl = APIConstants.PROPERTY_TAX_PAYMENT_URL+"/list";
    let getHeaders = new Headers({'authorization':'Bearer '+this.token});
    return this.http.get(getAllPaymentUrl, {headers: getHeaders});
  }

  deletePayment(id){
    let deletePaymentEndPoint = APIConstants.PROPERTY_TAX_PAYMENT_URL+"/"+id;
    let getHeaders = new Headers({'authorization':'Bearer '+this.token});
    return this.http.delete(deletePaymentEndPoint,{headers:getHeaders});
  }

  getPaymentById(id){
    let findPaymentById = APIConstants.PROPERTY_TAX_PAYMENT_URL+"/"+id;
    let getHeaders = new Headers({'authorization':'Bearer '+this.token});
    return this.http.get(findPaymentById,{headers:getHeaders});
  }
}
