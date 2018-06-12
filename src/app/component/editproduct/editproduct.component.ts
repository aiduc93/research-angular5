import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../models/product.class';
import {ProductService} from '../../services/product.service';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  public idProduct: number;
  public product: Product;
  constructor(
    public activeRoute: ActivatedRoute,
    public serviceProduct: ProductService
  ) { }

  ngOnInit() {
    //solution 1 
    //this.handleBySnapshot()
    
    //solution 2
    this.handleByParamSubscribe();
    
    console.log('idProduct', this.idProduct);
    console.log('zxc', this.product);
  }
  handleByParamSubscribe() {
    this.activeRoute.params.subscribe(data=> {
      this.product =  this.serviceProduct.getProductByID(data.id);
    })
  }
  handleBySnapshot() {
    this.idProduct = this.activeRoute.snapshot.params['id'];
    this.product = this.serviceProduct.getProductByID(this.idProduct);
  }
}
