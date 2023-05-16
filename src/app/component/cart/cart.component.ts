import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/CartService/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartBooks = [];

  constructor(private cartService : CartService){}
  ngOnInit(){
    this.getAllCartItems();
  }

  expand1 : boolean = true
  showContent : boolean = false;
  expandPanel2 : boolean = false;

  expandPanel3 : boolean = false;
  count =1;
  toggleButton1: boolean = true;
  toggleButton2: boolean = true;
  editButton1 : boolean = true;
  editButton2 : boolean = true;
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

  toOpenPanel3(){
    this.expandPanel3 = !this.expandPanel3;
    
  }

  dec(){
    
    this.count = this.count - 1;
  }

  inc(){
    this.count = this.count + 1;
  }

   

 enable1(){
    this.toggleButton1 = !this.toggleButton1;
 }

 enable2(){
  this.toggleButton2 = !this.toggleButton2;
}

 enableEditButton1(){
    this.editButton1 = !this.editButton1;
 }

 enableEditButton2(){
  this.editButton2= !this.editButton2;
}

  getAllCartItems(){
    console.log('getting all cart items =>');
    this.cartService.getAllCartBooks().subscribe((result : any) => {
      this.cartBooks = result;
    })
  }



}
