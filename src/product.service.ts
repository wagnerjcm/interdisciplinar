import { Injectable } from '@angular/core';
import { Product } from './product/product.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];
  private productsSubject = new BehaviorSubject<Product[]>(this.products);

  constructor() {}

  getProducts() {
    console.log(this.products);
    return this.products;
  }

  addProduct(product: Product) {
    this.products.push(product);
    this.productsSubject.next(this.products);
  }

  getProductsObservable() {
    return this.productsSubject.asObservable();
  }

  deleteProduct(product: Product) {
    this.products.splice(1);
  }
  popTable( ){
    this.products.pop;
  }
}

// getProducts() {
//   console.log(this.products);
//   return this.products;
// }

// addProduct(product: Product) {
//   this.products.push(product);
//   this.productsSubject.next(this.products);
// }

// getProductsObservable() {
//   return this.productsSubject.asObservable();
// }
