import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient : HttpClient) { }

  baseUrl  = 'https://bookstore.incubation.bridgelabz.com/bookstore_';

  postService(url:string,reqPayload : any,token:boolean,httpAuthOptions:any){
    console.log("posting from http searvice =>");
    return this.httpClient.post(this.baseUrl+url,reqPayload,token && httpAuthOptions);
  }
}
