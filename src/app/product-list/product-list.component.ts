import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/product.service';
import { Product } from 'src/product/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProductsObservable().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(index: number) {
    this.productService.deleteProduct(index);
  }

  popTable() {
    this.productService.popTable();
  }

  redirecionarParaVender() {
    this.router.navigate(['/seller']);
  }
}
