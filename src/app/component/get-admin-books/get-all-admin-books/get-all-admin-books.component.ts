import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Service/Book/book.service';
import { BookDetailsComponent } from '../../book-details/book-details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-get-all-admin-books',
  templateUrl: './get-all-admin-books.component.html',
  styleUrls: ['./get-all-admin-books.component.scss']
})
export class GetAllAdminBooksComponent implements OnInit {

  books=[];
  formData : any;
  constructor(private bookService : BookService,public dialog: MatDialog ){}
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

  openDialog(data? : any): void {
    const dialogRef = this.dialog.open(BookDetailsComponent, {
      data : this.formData ,
    });

    dialogRef.afterClosed().subscribe((result : any) => {
      if (result) {
        console.log('Form Data:', result);
       this.formData = result;
       
      }
    });
  }

}
