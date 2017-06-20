import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sort', pure: false })
export class SortPipe implements PipeTransform {
  transform(value: Array<any>, args?: any): any {

    return value.sort(function(a, b) {
      if(a[args.option] < b[args.option]){
        return -1;
      }
      else if( a[args.option] > b[args.option]){
        return 1;
      }
      else{
        return 0;
      }
    });
  };
}
