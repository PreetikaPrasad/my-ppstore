
import { Component } from '@angular/core';
import { Product } from '../app/model/ProductInterface';
// import {ProductInterface} from '../app/model';

/*interface Person {
  name: string;
  age: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ppstore';
  age = 0;
  count: number;
  Person: object = {
    name: 'preeti',
    id: 'exp123',

  };
  persons: Array <Person> = [{

    name: 'akhil' ,
    age: 27
  },
  {
    name: 'linto' ,
    age: 27

  }];



}*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*title = 'ppstore';*/
  // productdescription with objects
  products: Array<Product> = [{
    id: 1,
    name: 'bag',
  description: 'quality bags',
  image: './../assets/images/bag.jpg',
  imageAlt: 'Buy Now',
  isAvailable: true,
  price: 2000, },
  { id:2,
    name: 'storage box',
  description: 'quality boxs',
  image: './../assets/images/storage.jpg',
  imageAlt: 'Buy Now',
  isAvailable: true,
  price: 200, },
  {
    id:3,
    name: 'wallet',
  description: 'wallets box',
  image: './../assets/images/wallet.jpeg',
  imageAlt: 'Buy Now',
  isAvailable: true,
  price: 250, },
  {  id:4,
    name: 'watch',
  description: 'watches',
  image: './../assets/images/watch.jpg',
  imageAlt: 'Buy Now',
  isAvailable: true,
  price: 600, },
  {  id:5,
    name: 'box',
  description: 'boxes',
  image: './../assets/images/box.jpg',
  imageAlt: 'Buy Now',
  isAvailable: true,
  price: 600, },
];
}

// tslint:disable-next-line: label-position
// myProduct: Product = {
//     name: 'bag',
//     description: 'quality bags',
//     image: `https://images-eu.ssl-images-amazon.com/images/I/61I5N16qMAL.jpg`,
//     imageAlt: 'Buy Now',
//     isAvailable: true,
//     price: 2000,
//   };


