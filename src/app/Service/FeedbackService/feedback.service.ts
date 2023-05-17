import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  token : any;
  constructor(private httpService : HttpServiceService) { }

  addFeedback(productId: any,reqData : any){
    this.token = localStorage.getItem('token');

    console.log(this.token);
    
    const httpOption = {
      headers : new HttpHeaders({ 
        'ContentType' : 'application/json',
        'x-access-token' : this.token
      })
    }

    return this.httpService.postService('user/add/feedback/'+productId,reqData,true,httpOption);
  }

  gettingAllComments(productId: any){

    this.token = localStorage.getItem('token');

    console.log(this.token);
    
    const httpOption = {
      headers : new HttpHeaders({ 
        'ContentType' : 'application/json',
        'x-access-token' : this.token
      })
    }

    return this.httpService.getService('user/get/feedback/'+productId,true,httpOption)
  }
}
