import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Service/Book/book.service';

@Component({
  selector: 'app-get-all-admin-books',
  templateUrl: './get-all-admin-books.component.html',
  styleUrls: ['./get-all-admin-books.component.scss']
})
export class GetAllAdminBooksComponent implements OnInit {

  books=[];
  constructor(private bookService : BookService ){}
  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks(){
    console.log("Getting all books for admin =>");
    this.bookService.getAllBookData().subscribe((result : any) => {
      console.log(result);
      this.books = result.result;
      console.log(this.books);
      
    })
  }

}
