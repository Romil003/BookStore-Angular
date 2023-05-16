import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient : HttpClient) { }

  baseUrl  = 'https://bookstore.incubation.bridgelabz.com/bookstore_';

  postService(url:string,reqPayload : any,token:boolean,httpAuthOptions:any){
    console.log("posting from http service =>");
    return this.httpClient.post(this.baseUrl+url,reqPayload,token && httpAuthOptions);
  }

  getService(url:string,token:boolean,httpAuthOptions :any){
    console.log("gettong data from http service");
    return this.httpClient.get(this.baseUrl + url,token && httpAuthOptions);
    
  }

  postServiceWithPathVariable(url:string,token:boolean,httpAuthOptions :any){
    console.log("posting from http service with path Variable =>");
    // const httpOption = {
    //   headers : new HttpHeaders({ 
    //     'ContentType' : 'application/json'
    //   })
    // }
    // console.log("dffsf ", httpOption)
    return this.httpClient.post(this.baseUrl+url,token && httpAuthOptions);
  }
}
