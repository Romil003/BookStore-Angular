import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private mainSource = new BehaviorSubject([]);
  currentSource = this.mainSource.asObservable();

  orderId : string = "";

  sendingValue(msg : any){
    this.mainSource.next(msg);
  }

  private mainSource2 = new BehaviorSubject([]);
  currentSource2 = this.mainSource2.asObservable();

  sendingSortedValue(msg : any){
    this.mainSource2.next(msg);
  }

  private mainSource3 = new BehaviorSubject([]);
  currentSource3 = this.mainSource3.asObservable();

  sendingOrderId(msg : any){
    this.mainSource3.next(msg);
  }
}
