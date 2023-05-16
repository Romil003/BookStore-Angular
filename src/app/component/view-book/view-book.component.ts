import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Service/CartService/cart.service';
import { DataService } from 'src/app/Service/Data/data.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.scss']
})
export class ViewBookComponent implements OnInit {

  getBookData : any;
  addCart : boolean = true;
  count = 1;

  constructor(private route : Router,private dataService : DataService,private cartService : CartService){}
  ngOnInit(){
    this.gettingDataOfOneBook()
  }

  gettingDataOfOneBook(){
    this.dataService.currentSource.subscribe((result : any) => {
      this.getBookData = result;
      console.log(result);
      
    })
  }

  addTocart(id : any){
    console.log(id);
    
    this.cartService.addingBookToCart(id).subscribe((result : any) => {

      console.log("Book Adding to cart =>", result);
      this.addCart = false;
    })
    
  }

  dec(){
    
    this.count = this.count - 1;
  }

  inc(){
    this.count = this.count + 1;
  }

}
