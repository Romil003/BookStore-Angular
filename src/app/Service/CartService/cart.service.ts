import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpService : HttpServiceService, private http : HttpClient) { }

  token : any;


  addingBookToCart(id : any){
    this.token = localStorage.getItem('token');

    console.log(this.token);
    
    const httpOption = {
      headers : new HttpHeaders({ 
        'ContentType' : 'application/json',
        'x-access-token' : this.token
      })
    }

   return this.httpService.postService('user/add_cart_item/'+id,{},true,httpOption);
  
  
  }

  getAllCartBooks(){

    this.token = localStorage.getItem('token');

    console.log(this.token);
    
    const httpOption = {
      headers : new HttpHeaders({ 
        'ContentType' : 'application/json',
        'x-access-token' : this.token
      })
    }
    return this.httpService.getService('user/get_cart_items',true,httpOption);
  }

  updateQuantity(cartId : any,reqData : any){

    this.token = localStorage.getItem('token');

    console.log(this.token);
    
    const httpOption = {
      headers : new HttpHeaders({ 
        'ContentType' : 'application/json',
        'x-access-token' : this.token
      })
    }

    return this.httpService.putService('user/cart_item_quantity/'+cartId,reqData,true,httpOption);

  }

  removeBookFromCart(cartId : any){
    this.token = localStorage.getItem('token');

    console.log(this.token);
    
    const httpOption = {
      headers : new HttpHeaders({ 
        'ContentType' : 'application/json',
        'x-access-token' : this.token
      })
  }

  return this.httpService.deleteService('user/remove_cart_item/'+cartId,true,httpOption);
}



}
