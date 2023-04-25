import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-formproduct',
  templateUrl: './formproduct.component.html',
  styleUrls: ['./formproduct.component.css']
})
export class FormproductComponent implements OnInit {

  product!:Product;
  list!:Product[];

  constructor() { }

  ngOnInit(): void {
    this.product=new Product();
    this.list=[];
  }

}
