import { Injectable } from '@angular/core';
import { Product } from './product/product.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];
  private productsSubject = new BehaviorSubject<Product[]>(this.products);

  constructor() {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      this.products = JSON.parse(savedProducts);
      this.productsSubject.next(this.products);
    }
  }

  getProducts() {
    return this.products;
  }
  addProduct(product: Product) {
    this.products.push(product);
    this.saveToLocalStorage();
  }
  private saveToLocalStorage() {
    localStorage.setItem('products', JSON.stringify(this.products));
    this.productsSubject.next(this.products);
  }
  getProductsObservable() {
    return this.productsSubject.asObservable();
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
    this.productsSubject.next([...this.products]);
  }
  popTable() {
    this.products.pop();
    this.productsSubject.next([...this.products]);
  }
}
