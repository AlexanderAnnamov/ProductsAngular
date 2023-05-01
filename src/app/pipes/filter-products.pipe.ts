import { Pipe, PipeTransform } from '@angular/core';
import {exampleIpProduct} from "../models/exampleProduct";

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: exampleIpProduct[], search: string):exampleIpProduct[] {
    if (search.length === 0 ) return products
    return products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
  }

}
