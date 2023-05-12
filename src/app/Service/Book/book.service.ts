import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpService : HttpServiceService) { }

  getAllBookData(){
    console.log("getting books from book Service =>");
    return this.httpService.getService('user/get/book',false,{})
    
  }
}
