import { Component, Input, OnInit } from '@angular/core';
import { AdminBookService } from 'src/app/Service/AdminBook/admin-book.service';
import { DataService } from 'src/app/Service/Data/data.service';

@Component({
  selector: 'app-display-admin-book',
  templateUrl: './display-admin-book.component.html',
  styleUrls: ['./display-admin-book.component.scss']
})
export class DisplayAdminBookComponent implements OnInit {

  @Input() adminBooks:any ;
  searchbookArray = [];

  constructor(private adminBookService : AdminBookService,
    private dataService : DataService){

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

}
