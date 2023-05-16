import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Service/Data/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private dataService : DataService,private route : Router){}

  searchData(event : any){
    this.dataService.sendingValue(event.target.value);
  }

  loggingOut(){
    localStorage.removeItem('token');
    this.route.navigateByUrl('/login');
  }

}
