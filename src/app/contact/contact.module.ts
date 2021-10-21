import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ContactRoutinModule} from "./contact-routing.module";
import {ContactComponent} from "./components/contact/contact.component";


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports:[
    ContactRoutinModule,
    CommonModule
  ]
})

export class ContactModule{

}
