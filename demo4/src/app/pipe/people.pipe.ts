import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'people', pure: true
})
export class PeoplePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('非纯管道')
    return value.filter(p => p.canFly);
  }

}
