import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminBookService {

  adminToken : any;
  constructor(private httpService : HttpServiceService) { }

  addNewBookByAdmin(reqData : any){

    this.adminToken = localStorage.getItem('admin-token');

    console.log(this.adminToken);
    
    const httpOption = {
      headers : new HttpHeaders({ 
        'ContentType' : 'application/json',
        'x-access-token' : this.adminToken
      })
  }

  return this.httpService.postService('user/admin/add/book',reqData,true,httpOption);
  }

  updateBookByAdmin(reqData : any,bookId : any){

    this.adminToken = localStorage.getItem('admin-token');

    const httpOption = {
      headers : new HttpHeaders({ 
        'ContentType' : 'application/json',
        'x-access-token' : this.adminToken
      })
  }

  return this.httpService.putService('user/admin/update/book/'+bookId,reqData,true,httpOption);
    
  }

  deleteBookByAdmin(bookId : any){

    this.adminToken = localStorage.getItem('admin-token');

    console.log(this.adminToken);
    
    const httpOption = {
      headers : new HttpHeaders({ 
        'ContentType' : 'application/json',
        'x-access-token' : this.adminToken
      })
  }

  return this.httpService.deleteService('user/admin/delete/book/'+bookId,true,httpOption);
  }
}
