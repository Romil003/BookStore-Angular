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
    this.datService.sendingSortedValue(event.target.value);
  }


}
