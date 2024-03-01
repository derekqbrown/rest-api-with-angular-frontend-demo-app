import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(name:string) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

}
