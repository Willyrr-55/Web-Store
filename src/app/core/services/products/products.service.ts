import { Injectable } from '@angular/core';
import { Product } from '../../../product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[]= [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 15,
      description: 'Esta es una camiseta de alta calidad con las mejores confecciones'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 26.99,
      description: 'Este sueter es una edicion limitada de nuestro team de platzi, tela de alta calidad de algodon'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 14,
      description: 'Esta taza esta hecha con mucho amor para todos los estudiantes de platzi, con nuestro lema Nunca Pares de Aprender'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 10,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 3.5,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 6,
      description: 'Este es un stiker de platzi para los estudiantes'
    }
  ];
  constructor() { }
  getAllProducts(){
    return this.products;
  }

  getProduct(id:string){
    return this.products.find(item => id === item.id);
  }
}
