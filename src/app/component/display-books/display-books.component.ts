import { Component, Input, OnInit } from '@angular/core';
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
  
  constructor(private dataService : DataService){}
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
    this.dataService.currentSource.subscribe((result : any) => {
      this.gettingArray =result;
    })
  }

}
