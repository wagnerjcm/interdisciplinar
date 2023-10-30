import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/product.service';
import { Product } from 'src/product/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];
  @Output() addToCartEvent = new EventEmitter<Product>();

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  get product() {
    return this.productService.getProducts();
  }

  deleteProduct(index: number) {
    console.log(index);
    this.productService.deleteProduct;
  }

  popTable() {
  }

}






// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { ProductService } from 'src/product.service';
// import { Product } from 'src/product/product.model';

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
// export class ProductListComponent implements OnInit {
//   @Input() products: Product[] = [];
//   @Output() addToCartEvent = new EventEmitter<Product>();

//   constructor(private productService: ProductService) {}

//   ngOnInit() {
//     console.log(this.products);
//   }

//   addToCart(product: Product) {
//     this.addToCartEvent.emit(product);
//   }
// }
