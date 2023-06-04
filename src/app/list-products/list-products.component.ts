import { Component, Input } from '@angular/core';
import { Product } from '../interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent {
  productService: ProductService;
  constructor(productService: ProductService) {
    this.productService = productService;
  }

  productName = '';

  @Input()
  products!: Product[];

  clickHandler() {
    this.productService.addNewProduct(this.productName);
  }

  delete(product: Product) {
    this.productService.deleteProduct(product.name);
  }
}
