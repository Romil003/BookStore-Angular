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

    // const httpOption = new HttpHeaders()
    // .set('Content-Type', 'application/json')
    // .set('Authorization', 'Bearer ${token}');
    const httpOption = {
      headers : new HttpHeaders({ 
        ContentType : 'application/json',
        token : this.token
      })
    }
    // const headers = new HttpHeaders();
    // headers.set("ContentType" , 'application/json')

    // console.log(headers);
    // console.log("dffsf ", httpOption)
    // const httpOption = {
    //   headers : new HttpHeaders({ 
    //     ContentType : 'application/json',
    //     token : this.token
    //   })
    // }
    // console.log("Adding book to cart");
    // console.log(httpOption);
    // console.log(this.token);
   return this.httpService.postServiceWithPathVariable('user/add_cart_item/'+id,true,httpOption);
  // return from(this.token).pipe(
  //   switchMap(token => {
  //     if (token) {
  //       const headers = new HttpHeaders()
  //         .set('Content-Type', 'application/json')
  //         .set('Authorization', `Bearer ${token}`);

  //       return this.httpService.postServiceWithPathVariable('user/add_cart_item/'+id, { headers });
  //     } else {
  //       return of(null); // or throw an error
  //     }
  //   })
  // );
  
    
  }

  getAllCartBooks(){
    // this.token = localStorage.getItem('token');

    // const httpOption = {
    //   headers : new HttpHeaders({ 
    //     ContentType : 'application/json',
    //     token : this.token
    //   })
    // }

    return this.httpService.getService('user/get_cart_items',false,{});
  }
}
