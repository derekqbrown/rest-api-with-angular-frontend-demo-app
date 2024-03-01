import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyDisplay'
})
export class CurrencyDisplayPipe implements PipeTransform {

  transform(currency:number) {
    return "$"+currency+".00";
  }

}
