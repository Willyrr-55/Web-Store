import { Component, OnInit, AfterViewInit } from '@angular/core'; /* El elemento AfterViewInit me dice cuando los elementos hijos ya fueron renderizados*/
import Swiper from "swiper";
// import 'swiper/css';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit{

  mySwiper: Swiper;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.mySwiper = new Swiper(".swiper-container", {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

}
