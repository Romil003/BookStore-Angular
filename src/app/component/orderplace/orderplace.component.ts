import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Service/Data/data.service';

@Component({
  selector: 'app-orderplace',
  templateUrl: './orderplace.component.html',
  styleUrls: ['./orderplace.component.scss']
})
export class OrderplaceComponent implements OnInit {

  orderPlacedId : any;
  constructor( private dataService : DataService){
    
  }
  ngOnInit() {
    
    this.dataService.currentSource3.subscribe((result : any) => {
      this.orderPlacedId = result
    })
    
  }
}
