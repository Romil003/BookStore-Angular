import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  token : any;
  constructor(private httpService : HttpServiceService) { }

  addOrder(reqData : any){
    this.token = localStorage.getItem('token');

    console.log(this.token);
    
    const httpOption = {
      headers : new HttpHeaders({ 
        'ContentType' : 'application/json',
        'x-access-token' : this.token
      })
  }

  return this.httpService.postService('user/add/order',reqData,true,httpOption);
  }

}
