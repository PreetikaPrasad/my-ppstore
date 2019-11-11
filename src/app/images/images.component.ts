import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import {Product} from 'src/app/model/ProductInterface';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
    products: Product[];

  constructor(private productService: ProductService) { }
  getProducts() {
    this.products = this.productService.getProducts();

  }

  // products: Array<Product> = [{
  //   name: 'bag',
  // description: 'quality bags',
  // image: './../assets/images/bag.jpg',
  // imageAlt: 'Buy Now',
  // isAvailable: true,
  // price: 2000, },
  // {
  //   name: 'storage box',
  // description: 'quality boxs',
  // image: './../assets/images/storage.jpg',
  // imageAlt: 'Buy Now',
  // isAvailable: true,
  // price: 200, },
  // {
  //   name: 'wallet',
  // description: 'wallets box',
  // image: './../assets/images/wallet.jpeg',
  // imageAlt: 'Buy Now',
  // isAvailable: true,
  // price: 250, },
  // {
  //   name: 'watch',
  // description: 'watches',
  // image: './../assets/images/watch.jpg',
  // imageAlt: 'Buy Now',
  // isAvailable: true,
  // price: 600, },
  // {
  //   name: 'box',
  // description: 'boxes',
  // image: './../assets/images/box.jpg',
  // imageAlt: 'Buy Now',
  // isAvailable: true,
  // price: 600, },
  // ];

  ngOnInit() {
    this.getProducts();
  }
}
