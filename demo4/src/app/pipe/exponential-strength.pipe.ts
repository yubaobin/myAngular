import { Pipe, PipeTransform, AfterContentInit } from '@angular/core';

@Pipe({
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform, AfterContentInit {

  transform(value: any, args?: any): any {
    console.log(`管道:${value}, ${args}`)
    return value * args;
  }
  ngAfterContentInit() {
    console.log(123);
  }
}
