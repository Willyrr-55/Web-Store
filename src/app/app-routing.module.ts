import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/components/page-not-found/page-not-found.component"
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
        canActivate:[AdminGuard],
        loadChildren: ()=>import("./contact/contact.module").then(m=>m.ContactModule)
      },
      {
        path:"demo",
        loadChildren: ()=>import("./demo/demo.module").then(m=>m.DemoModule)
      },
    ]
  },



  {
    path:"**" /* Este path quiere decir que se ingreso una ruta que no esta definida */,
    loadChildren: ()=>import("./page-not-found/page-not-found.module").then(m=>m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
