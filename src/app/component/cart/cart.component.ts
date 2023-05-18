import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/CartService/cart.service';
import { DataService } from 'src/app/Service/Data/data.service';
import { OrderService } from 'src/app/Service/OrderService/order.service';
import { UserService } from 'src/app/Service/UserService/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartBooks: any = [];

  constructor(private cartService : CartService ,
     private userService : UserService,
     private orderService : OrderService,
     private dataService : DataService){}
  ngOnInit(){
   this.refreshPageAfterAnyUpdates();
  }

  expand1 : boolean = true
  showContent : boolean = false;
  expandPanel2 : boolean = false;

  expandPanel3 : boolean = false;
  
  
  editButton1 : boolean = true;
  editButton2 : boolean = true;

  fullname : any;
  mobilenumber : any;
  addressType1:any;
  address1 : any;
  address2 : any;
  city : any;
  state : any;
  addressType2 : any;
   totalOrderArray : any  = [];
   forId : any;
   orderId : any
  // step = 0;

  // setStep(index: number) {
  //   this.step = index;
  // }

  // nextStep() {
  //   this.step++;
  // }

  toOpenPanel2(){
    this.expandPanel2 = !this.expandPanel2;
    this.showContent = !this.showContent;
  }

  panel2Close(){
    this.showContent = !this.showContent;
  }

  expandPanel(panelIndex: number): void {
    switch (panelIndex) {
      case 2:
        this.expandPanel2 = true;
        break;
      case 3:
        this.expandPanel3 = true;
        break;
      // Handle additional panels...
    }

  }

  toOpenPanel3(){
    this.expandPanel3 = !this.expandPanel3;
    this.updateDetailsOfCustomerForAddress();
  }

  dec(cardId:any,getQuantity : any){
    getQuantity -=1;
    let quantity = getQuantity;
    this.updateBookQuantity(cardId,quantity);
    
  }

  inc(cardId:any,getQuantity : any){
    getQuantity +=1;
    let quantity = getQuantity;
    this.updateBookQuantity(cardId,quantity);
    
  }

 enableEditButton1(){
    
    this.addressType1 = "Office";
    
 }

 enableEditButton2(){
  
  this.addressType2 = "Home";
}

  getAllCartItems(){
    console.log('getting all cart items =>');
    this.cartService.getAllCartBooks().subscribe((result : any) => {
      console.log(result);
      this.cartBooks = result.result;
      
    })
  }

  updateBookQuantity(cardId : any,quantity :any){
    let reqData = {
      "quantityToBuy": quantity
    }
    this.cartService.updateQuantity(cardId,reqData).subscribe((result) => {
      console.log(result);
      
    })
  }

  removeBook(cartId : any){
    console.log(cartId);
    
    console.log("removing book from cart =>");
    this.cartService.removeBookFromCart(cartId).subscribe((result : any) => {
      console.log(result);
      console.log("book remove from cart");
      
    })
    this.getAllCartItems();
  }

  refreshPageAfterAnyUpdates(){
    this.getAllCartItems();
  }

  updateDetailsOfCustomerForAddress(){
    
    if(this.addressType1 === "Office"){
      let reqData ={
        "addressType": "Office",
        "fullAddress": this.address1,
        "city": this.city,
        "state": this.state
      }
      this.userService.updateCustomerDetails(reqData).subscribe((result : any) => {
        console.log(result);
        
      })
    } else if(this.addressType2 === "Home") {
      let reqData ={
        "addressType": "Home",
        "fullAddress": this.address2,
        "city": "Mumbai",
        "state": "Maharastra"
      }
      this.userService.updateCustomerDetails(reqData).subscribe((result : any) => {
        console.log(result);
        
      })
    } else {
      let reqData ={
        "addressType": "Home",
        "fullAddress": this.address2,
        "city": "Mumbai",
        "state": "Maharastra"
      }
      this.userService.updateCustomerDetails(reqData).subscribe((result : any) => {
        console.log(result);
        
      })
    }
  }

  placeOrder(){
    this.getAllCartItems();
    console.log(this.cartBooks);
    for(let book of this.cartBooks){
      const newOrder = 
        {
          "product_id": book.product_id._id,
          "product_name": book.product_id.bookName,
          "product_quantity": book.quantityToBuy,
          "product_price": book.product_id.discountPrice
        }

        this.totalOrderArray.push(newOrder);
      
    }

    console.log(this.totalOrderArray);
    let reqData = {
      "orders" : this.totalOrderArray
    }

    console.log(reqData);
    
    return this.orderService.addOrder(reqData).subscribe((result : any) => {
      console.log(result);
      this.forId = result.result[0];
      this.orderId = this.forId._id;
      this.dataService.sendingOrderId(this.orderId);
      console.log(this.dataService.orderId);
      
    })
  }


}
