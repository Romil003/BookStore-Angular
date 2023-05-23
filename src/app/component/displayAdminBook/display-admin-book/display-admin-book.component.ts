import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { AdminBookService } from 'src/app/Service/AdminBook/admin-book.service';
import { DataService } from 'src/app/Service/Data/data.service';
import { BookDetailsComponent } from '../../book-details/book-details.component';
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-display-admin-book',
  templateUrl: './display-admin-book.component.html',
  styleUrls: ['./display-admin-book.component.scss']
})
export class DisplayAdminBookComponent implements OnInit {

  @Input() adminBooks:any ;
  searchbookArray = [];

  displayedColumns: string[] = ['Image', 'bookName', 'author', 'quantity','price','discountedPrice','Action'];
  

  @ViewChild(MatTable) table: MatTable<PeriodicElement> | undefined;

  formData : any;
  constructor(private adminBookService : AdminBookService,
    private dataService : DataService,
    public dialog: MatDialog ){

  }
  ngOnInit() {
    this.searchBook();
  }

  searchBook(){
    this.dataService.currentSource.subscribe((result : any) => {
      console.log(result);
      this.searchbookArray = result;
    })
  }

  removeBook(Id : any){
    this.adminBookService.deleteBookByAdmin(Id).subscribe((result : any) => {
      console.log(result);
      
    })
  }

  updateBook(bookData : any,Id : any){

    this.formData = bookData;
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
