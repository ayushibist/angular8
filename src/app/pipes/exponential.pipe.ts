import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('-->', value, args);
    return Math.pow(value, isNaN(args) ? 1 : args);
  }

}
