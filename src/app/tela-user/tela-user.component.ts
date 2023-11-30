import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from 'src/car-item/car-item.model';
import { ProductService } from 'src/product.service';
import { Product } from 'src/product/product.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tela-user',
  templateUrl: './tela-user.component.html',
})
export class TelaUserComponent {
  cart: CartItem[] = [];

  @Input() userProducts!: Product[];

  get products() {
    return this.userProducts || this.productService.getProducts();
  }

  @Output() addToCartEvent = new EventEmitter<Product>();

  constructor(private productService: ProductService, private router: Router) {
    this.productService.getProductsObservable().subscribe((products) => {
      this.userProducts = products;
    });
  }

  addToCart(product: Product) {
    const existingCartItem = this.cart.find((item) => item.product === product);

    if (existingCartItem) {
      existingCartItem.quantity++;
    } else {
      const cartItem: CartItem = {
        product: product,
        quantity: 1,
      };
      this.cart.push(cartItem);
    }
  }

  removeFromCart(item: CartItem) {
    const itemIndex = this.cart.indexOf(item);
    if (itemIndex !== -1) {
      this.cart.splice(itemIndex, 1);
    }
  }

  checkout() {
    this.router.navigate(['/payment']);
  }
}
