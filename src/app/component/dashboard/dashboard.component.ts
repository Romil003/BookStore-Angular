import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Service/CartService/cart.service';
import { DataService } from 'src/app/Service/Data/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dataService : DataService,private route : Router,private cartService : CartService ){}
  typesOfBookInCart = 0
  cartData  = [];
  ngOnInit() {
   this.gettingAllCartData();
  }

  searchData(event : any){
    this.dataService.sendingValue(event.target.value);
  }

  loggingOut(){
    localStorage.removeItem('token');
    this.route.navigateByUrl('/login');
  }

  gettingAllCartData(){
    console.log('getting all cart items =>');
    this.cartService.getAllCartBooks().subscribe((result : any) => {
      console.log(result);
      this.cartData = result.result;
      this.typesOfBookInCart = this.cartData.length;
      this.dataService.sendingAllCartData(this.cartData);
    })

    

  }

}
