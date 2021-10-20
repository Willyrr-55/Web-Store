import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import {ContactComponent} from "./contact/contact/contact.component";
import {DemoComponent} from "./demo/demo.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component"
// import {ProductDetailComponent} from "./product/components/product-detail/product-detail.component"
import {LayoutComponent} from "./layout/layout.component"
import {AdminGuard} from "./admin.guard";

const routes: Routes = [
  {
    path:"",
    component:LayoutComponent,

    children:[
      {
        path:"",
        redirectTo:"/home",
        pathMatch:"full"
      },
      {
        path:"home",
        loadChildren:  ()=>import("./home/home.module").then(m=> m.HomeModule)
      },
      {
        path:"products",
        loadChildren: ()=>import("./product/product.module").then(m=>m.ProductModule)
      },
      {
        path:"contact",
        component: ContactComponent
      },
    ]
  },

  {
    path:"demo",
    component:DemoComponent
  },

  {
    path:"**" /* Este path quiere decir que se ingreso una ruta que no esta definida */,
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
