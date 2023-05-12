import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(value: any[], args: any){
    console.log(value,args);
    if(args === ''){
      return value;
    } else if(args === 'lowtohigh') {
      return value.sort((res1 : any,res2: any) => res1.discountPrice - res2.discountPrice);
    } else if(args === 'hightolow'){
      return value.sort((res1 : any,res2: any) => res2.discountPrice - res1.discountPrice);
    }
    return value;
    
  }

}
