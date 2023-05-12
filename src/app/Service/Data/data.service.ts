import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private mainSource = new BehaviorSubject([]);
  currentSource = this.mainSource.asObservable();

  sendingValue(msg : any){
    this.mainSource.next(msg);
  }
}
