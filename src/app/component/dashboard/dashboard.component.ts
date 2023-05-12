import { Component } from '@angular/core';
import { DataService } from 'src/app/Service/Data/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private dataService : DataService){}

  searchData(event : any){
    this.dataService.sendingValue(event.target.value);
  }

}
