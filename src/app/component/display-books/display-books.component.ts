import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Service/Data/data.service';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss']
})
export class DisplayBooksComponent implements OnInit {

  @Input() getBooksArray : any
  gettingArray : any
  sortingOfBooks : any
  page : any
  
  constructor(private dataService : DataService , private route : Router){}
  ngOnInit(){
    this.showSearchValues();
    this.sortbyPriceDisplaying();
  }

  showSearchValues(){
    this.dataService.currentSource.subscribe((result : any) => {
      this.gettingArray = result;
    })
  }

  sortbyPriceDisplaying(){
    this.dataService.currentSource2.subscribe((result : any) => {
      this.sortingOfBooks =result;
    })
  }

  goToQuickView(book : any){
    this.dataService.sendingValue(book);
    this.route.navigateByUrl('/dashboard/viewbook');
  }

}
