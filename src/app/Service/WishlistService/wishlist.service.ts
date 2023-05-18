import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  token : any;
  constructor(private httpService : HttpServiceService) { }

  addBookToWishlist(productId : any) {
    this.token = localStorage.getItem('token');

    console.log(this.token);
    
    const httpOption = {
      headers : new HttpHeaders({ 
        'ContentType' : 'application/json',
        'x-access-token' : this.token
      })
    }

    return this.httpService.postService('user/add_wish_list/'+productId,{},true,httpOption);
  }

  getAllWishlist(){
    this.token = localStorage.getItem('token');

    console.log(this.token);
    
    const httpOption = {
      headers : new HttpHeaders({ 
        'ContentType' : 'application/json',
        'x-access-token' : this.token
      })
    }

    return this.httpService.getService('user/get_wishlist_items',true,httpOption);
  }

  removeBookFromWishlist(productId : any){
    this.token = localStorage.getItem('token');

    console.log(this.token);
    
    const httpOption = {
      headers : new HttpHeaders({ 
        'ContentType' : 'application/json',
        'x-access-token' : this.token
      })
    }

    return this.httpService.deleteService('user/remove_wishlist_item/'+productId,true,httpOption);


  }
}
