import { Injectable } from '@angular/core';
import {Product} from '../model/ProductInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductService { 
private products: Array<Product> //dependancy injection
= [{
  id: 1,
  name: 'bag',
description: 'quality bags',
image: './../assets/images/bag.jpg',
imageAlt: 'Buy Now',
isAvailable: true,
price: 2000 },
{
  id: 2,
  name: 'storage box',
description: 'quality boxs',
image: './../assets/images/storage.jpg',
imageAlt: 'Buy Now',
isAvailable: true,
price: 200 },
{
  id: 3,
  name: 'wallet',
description: 'wallets box',
image: './../assets/images/wallet.jpeg',
imageAlt: 'Buy Now',
isAvailable: true,
price: 250 },
{
  id: 4,
  name: 'watch',
description: 'watches',
image: './../assets/images/watch.jpg',
imageAlt: 'Buy Now',
isAvailable: true,
price: 600},
{
  id: 5,
  name: 'box',
description: 'boxes',
image: './../assets/images/box.jpg',
imageAlt: 'Buy Now',
isAvailable: true,
price: 600 },
];
  constructor() {}
  getProducts() {
  
    return this.products;
  }
  addproducts(product: Product) {
  this.products.push(product);

  //   ]
  // }

  }


}
