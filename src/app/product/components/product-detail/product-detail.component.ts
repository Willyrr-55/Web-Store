import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ProductsService} from "../../../core/services/products/products.service";
import {Product} from "../../../product.model"

// ActivateRoute es la inyeccion de dependencias
// Params es de tipado

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product:Product;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) =>{
      const id:string = params.id;
      this.product = this.productsService.getProduct(id);
      console.log(this.product);
    });
  }

}
