import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Service/Data/data.service';

@Component({
  selector: 'app-orderplace',
  templateUrl: './orderplace.component.html',
  styleUrls: ['./orderplace.component.scss']
})
export class OrderplaceComponent implements OnInit {

  orderPlacedId : any;
  constructor( private dataService : DataService,private route : Router){
    
  }
  ngOnInit() {
    
    this.dataService.currentSource3.subscribe((result : any) => {
      this.orderPlacedId = result
    })
    
  }

  goToShoppingPage(){
    this.route.navigateByUrl('/dashboard');
  }
}
