import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Service/Data/data.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.scss']
})
export class ViewBookComponent implements OnInit {

  getBookData : any;

  constructor(private route : Router,private dataService : DataService){}
  ngOnInit(){
    this.gettingDataOfOneBook()
  }

  goToHome(){
    this.route.navigateByUrl('/dashboard');
  }

  gettingDataOfOneBook(){
    this.dataService.currentSource.subscribe((result : any) => {
      this.getBookData = result;
    })
  }

}
