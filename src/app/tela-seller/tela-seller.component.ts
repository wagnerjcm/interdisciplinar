import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/product.service';
import { Product } from 'src/product/product.model';

@Component({
  selector: 'app-tela-seller',
  templateUrl: './tela-seller.component.html',
})
export class TelaSellerComponent {
  name: string = '';
  price: number = 0;
  quantity: number = 0;

  showProductList = false;
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  addProduct() {
    if (this.name.trim() === '' || this.price <= 0 || this.quantity <= 0) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }

    const product: Product = {
      name: this.name,
      price: this.price,
      quantity: this.quantity
    };

    this.productService.addProduct(product);
    this.updateProductList();
    this.name = '';
    this.price = 0;
    this.quantity = 0;

    alert('Produto cadastrado com sucesso!');
  }

  toggleProductList() {
    this.router.navigate(['/market']);
  }

  updateProductList() {
    this.products = this.productService.getProducts();
  }
}
