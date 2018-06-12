import { Injectable } from '@angular/core';
import {Product} from '../models/product.class';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products: Product[]=[
    {
      id: 1,
      name: 'Đậu xanh',
      price: 10000,
      status: true
    },
    {
      id: 2,
      name: 'Đậu đỏ',
      price: 20000,
      status: true
    },
    {
      id: 3,
      name: 'Đậu đen',
      price: 30000,
      status: false
    },
    {
      id: 4,
      name: 'Đậu cà chua',
      price: 40000,
      status: false
    },
    {
      id: 5,
      name: 'Đậu cà tím',
      price: 50000,
      status: false
    },
  ];
  constructor() { };
  getAllProduct() {
    return this.products;
  }

  getProductByID(id) {
    let result = null;
    for(const product of this.products) {
      
      if (product.id === parseInt(id)) {
        result = product;
      }
    }
    return result;
  }
}
