import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  token : any;

  constructor(private httpService : HttpServiceService) { }

  adminSignUpService(reqData : any){
    console.log("sign up service from user =>");
    return this.httpService.postService('user/admin/registration',reqData,false,{});
  }

  adminLogInService(reqData : any){
    console.log("log in service from user =>");
    return this.httpService.postService('user/admin/login',reqData,false,{});
  }
}
