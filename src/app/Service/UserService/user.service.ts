import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token : any;

  constructor(private httpService : HttpServiceService) { }

  signUpService(reqData : any){
    console.log("sign up service from user =>");
    return this.httpService.postService('user/registration',reqData,false,{});
  }

  logInService(reqData : any){
    console.log("log in service from user =>");
    return this.httpService.postService('user/login',reqData,false,{});
  }

  updateCustomerDetails(reqData : any){
    this.token = localStorage.getItem('token');

    console.log(this.token);
    
    const httpOption = {
      headers : new HttpHeaders({ 
        'ContentType' : 'application/json',
        'x-access-token' : this.token
      })
  }

  return this.httpService.putService('user/edit_user',reqData,true,httpOption);
  }
}
