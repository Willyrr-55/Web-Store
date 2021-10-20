import {NgModule} from "@angular/core";
import {ProductComponent} from "./components/product/product.component";
import {CommonModule} from "@angular/common";
import {ProductRoutingModule} from "./product-routing.module";
// import {ExponentialPipe} from "../shared/pipes/exponential/exponential.pipe"
import {ProductDetailComponent} from "../product/components/product-detail/product-detail.component";
import {ProductsComponent} from "../product/components/products/products.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductsComponent
  ],
  imports:[
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ]
})

export class ProductModule{

}
