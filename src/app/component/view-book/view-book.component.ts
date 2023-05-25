import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Service/CartService/cart.service';
import { DataService } from 'src/app/Service/Data/data.service';
import { FeedbackService } from 'src/app/Service/FeedbackService/feedback.service';
import { WishlistService } from 'src/app/Service/WishlistService/wishlist.service';


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
  showGoldenStar : boolean = false;
  showGoldenStar2 : boolean = false;
  showGoldenStar3 : boolean = false;
  showGoldenStar4 : boolean = false;
  showGoldenStar5 : boolean = false;
  starRatingValue : any;
  singleRating = [];
  ratingArray : any  = [];
  constructor(private dataService : DataService,
    private cartService : CartService,private feedbackService : FeedbackService,
    private wishlistService : WishlistService){

    }


  ngOnInit(){
    this.gettingDataOfOneBook()
    
  }

  showrating(){
    this.showGoldenStar = !this.showGoldenStar;
    this.starRatingValue = 1;
  }

  showRatingStar2(){
    this.showGoldenStar = !this.showGoldenStar;
    this.showGoldenStar2 = ! this.showGoldenStar2;
    this.starRatingValue = 2;
  }

  showRatingStar3(){
    this.showGoldenStar = !this.showGoldenStar;
    this.showGoldenStar2 = !this.showGoldenStar2;
    this.showGoldenStar3 = !this.showGoldenStar3;
    this.starRatingValue = 3;
  }
  showRatingStar4(){
    this.showGoldenStar = !this.showGoldenStar;
    this.showGoldenStar2 = !this.showGoldenStar2;
    this.showGoldenStar3 = !this.showGoldenStar3;
    this.showGoldenStar4 = !this.showGoldenStar4;
    this.starRatingValue = 4;
  }
  showRatingStar5(){
    this.showGoldenStar = !this.showGoldenStar;
    this.showGoldenStar2 = !this.showGoldenStar2;
    this.showGoldenStar3 = !this.showGoldenStar3;
    this.showGoldenStar4 = !this.showGoldenStar4;
    this.showGoldenStar5 = !this.showGoldenStar5;
    this.starRatingValue = 5;
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
      "rating": this.starRatingValue
    }

    this.feedbackService.addFeedback(productId,reqData).subscribe((result : any) => {
      console.log(result);
      
    })

  }

  gettingCommentForOneBook(productId : any){
    this.feedbackService.gettingAllComments(productId).subscribe((result : any) => {
      this.obtainedFeedback = result.result;
      console.log(this.obtainedFeedback);
      for(let data of this.obtainedFeedback){
        this.singleRating = data.rating;
        this.ratingArray.push(this.singleRating);
      }
    })
  }

  addingBookToWishlist(productId : any){
    console.log("Adding to book to wishlist => ");

    this.wishlistService.addBookToWishlist(productId).subscribe((result : any) => {
      console.log(result);
      
    })
    
  }

}
