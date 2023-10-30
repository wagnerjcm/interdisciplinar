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

  product: Product = new Product();
  showProductList = false;
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router
  ) {
  }

  addProduct() {
    const product = {
      name : this.name,
      price : this.price,
      quantity: this.quantity
    }
      this.productService.addProduct(product);
      this.name = '';
      this.price = 0;
      this.quantity = 0;
    alert('Produo cadastrado com sucesso!');
  }

  toggleProductList() {
    this.router.navigate(['/market']);
  }

  updateProductList() {
    this.products = this.productService.getProducts(); // Carrega os produtos
  }
}
