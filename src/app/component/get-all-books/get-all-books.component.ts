import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Service/Book/book.service';
import { DataService } from 'src/app/Service/Data/data.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {

  bookArray = [];
  sortedArray = [];
  givenValue : any
  lowtohigh : any
  hightolow : any
  newArrivals : any

  constructor(private bookService : BookService,private datService : DataService){}


  ngOnInit(){
    // if(this.givenValue == this.lowtohigh){
    //   this.lowToHighPricing();
    // } else if(this.givenValue == this.hightolow){
    //   this.highToLowPricing();
    // } else if(this.givenValue == this.newArrivals){
    //   this.newArriving();
    // }

    this.gettingAllBooks();
      
  }

  gettingAllBooks(){
    console.log("Getting all book from component =>");
    this.bookService.getAllBookData().subscribe((response : any) => {
      console.log(response);
      
      this.bookArray = response.result;
      console.log(this.bookArray);
      
    })
  }

  sorting(event : any){
    
    // this.sortedArray=this.bookArray.sort((a : any,b:any) => a.discountPrice - b.discountPrice);
    // console.log(this.sortedArray);
    // this.bookArray = this.sortedArray;
    // return this.bookArray;
    this.datService.sendingValue(event.target.value);

  }

  // highToLowPricing(event : any){
  
  // //  this.bookArray.sort((a : any,b:any) => b.discountPrice - a.discountPrice);
  // //   this.bookArray = this.sortedArray;
  // //   return this.bookArray;
  // this.datService.sendingValue(event.target.value);
  // }

  // newArriving(event : any){
  //   this.datService.sendingValue(event.target.value);
  //   // this.bookArray.sort((a : any,b:any) => a.updatedAt - b.updatedAt);
  //   // this.bookArray = this.sortedArray;
  //   // return this.bookArray;
  // }

}
