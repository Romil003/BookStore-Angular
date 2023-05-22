import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Service/Data/data.service';

@Component({
  selector: 'app-adminboard',
  templateUrl: './adminboard.component.html',
  styleUrls: ['./adminboard.component.scss']
})
export class AdminboardComponent {

  constructor(private dataService : DataService,private route : Router){}
  typesOfBookInCart = 0
  cartData  = [];
  ngOnInit() {
   this.gettingAllCartData();
  }

  searchData(event : any){
    this.dataService.sendingValue(event.target.value);
  }

  loggingOut(){
    localStorage.removeItem('admin-token');
    this.route.navigateByUrl('/login');
  }

  gettingAllCartData(){
    console.log('getting all cart items =>');

  }
}
