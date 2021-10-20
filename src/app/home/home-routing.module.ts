import {NgModule} from "@angular/core"
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";

const router:Routes=[
  {
    path:"",
    component :HomeComponent
  }
]
@NgModule({
    imports:[
        RouterModule.forChild(router),
    ],
    exports:[
        RouterModule
    ]
})
export class HomeRoutingModule{

}
