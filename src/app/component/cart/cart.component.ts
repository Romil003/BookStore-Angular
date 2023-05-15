import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  expand1 : boolean = true
  showContent : boolean = false;
  expandPanel2 : boolean = false;

  expandPanel3 : boolean = false;
  // step = 0;

  // setStep(index: number) {
  //   this.step = index;
  // }

  // nextStep() {
  //   this.step++;
  // }

  toOpenPanel2(){
    this.expandPanel2 = !this.expandPanel2;
    this.showContent = !this.showContent;
  }

  toOpenPanel3(){
    this.expandPanel3 = !this.expandPanel3;
    
  }

  



}
