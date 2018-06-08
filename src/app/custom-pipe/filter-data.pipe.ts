import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {

  transform(products: any, id: number, name: string, status: string): any {
    // console.log('products', products);
    // console.log('name', name);
    // console.log('id', id);
    // console.log('status', status);
    if (id) {
      return products.filter((product) => product.id.toString() === id);
    } else if (name) {
      return products.filter((product) => product.name.toLowerCase().indexOf(name) > -1);
    } else if (status) {
      return products.filter((product) => product.status.toString().toLowerCase().indexOf(status.toString()) > -1);
    }
    return products;
  }

}
