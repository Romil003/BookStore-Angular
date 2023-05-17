import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Service/CartService/cart.service';
import { DataService } from 'src/app/Service/Data/data.service';
import { FeedbackService } from 'src/app/Service/FeedbackService/feedback.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.scss']
})
export class ViewBookComponent implements OnInit {

  getBookData : any;
  addCart : boolean = true;
  count = 1;
  feedback : any;
  obtainedFeedback : any
  constructor(private route : Router,private dataService : DataService,
    private cartService : CartService,private feedbackService : FeedbackService){

    }


  ngOnInit(){
    this.gettingDataOfOneBook()
    
  }

  

  gettingDataOfOneBook(){
    this.dataService.currentSource.subscribe((result : any) => {
      this.getBookData = result;
      console.log(result);
      this.gettingCommentForOneBook(this.getBookData._id);
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

  givingFeedback(productId : any){

    let reqData = {
      "comment": this.feedback,
      "rating": "3"
    }

    this.feedbackService.addFeedback(productId,reqData).subscribe((result : any) => {
      console.log(result);
      
    })

  }

  gettingCommentForOneBook(productId : any){
    this.feedbackService.gettingAllComments(productId).subscribe((result : any) => {
      this.obtainedFeedback = result.result;
      console.log(this.obtainedFeedback);
      
    })
  }

}
