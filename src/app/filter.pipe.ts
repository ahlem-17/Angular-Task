import { Pipe, PipeTransform } from '@angular/core';
import { Products } from './types';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: Products[], filterText: string): Products[] {
    if(products.length === 0 || filterText === '') {
      return products;
    }
    return products.filter(products =>  products.title.toLowerCase().indexOf(filterText.toLowerCase()) !== -1);
      
  }

}
