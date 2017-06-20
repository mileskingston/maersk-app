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

//     // let newVal = value.sort((a:any, b:any) => {
//     //   debugger;
//     //   if (!args) args == 'date';

//     //   let valOne = new Date(a.args),
//     //     valTwo = new Date(b.args);

//     //     // if(args == 'date') {
//     //       // console.log('date');
//     //      //   if (valOne > valTwo) {
//     //      //     return 0;
//     //      //   } else if (valOne < valTwo) {
//     //      //     return -1;
//     //      //   } else {
//     //      //     return 1;
//     //      //   }
//     //     // } else {
//     //       // console.log('name');
//     //        if (valOne > valTwo) {
//     //          return 1;
//     //        } else if (valOne < valTwo) {
//     //          return -1;
//     //        } else {
//     //          return 0;
//     //        }
//     //     // }
//     //  });

//     //  return newVal;
//   }
// }
