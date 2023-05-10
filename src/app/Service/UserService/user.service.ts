import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService : HttpServiceService) { }

  signUpService(reqData : any){
    console.log("sign up service from user =>");
    return this.httpService.postService('user/registration',reqData,false,{});
  }

  logInService(reqData : any){
    console.log("log in service from user =>");
    return this.httpService.postService('user/login',reqData,false,{});
  }
}
