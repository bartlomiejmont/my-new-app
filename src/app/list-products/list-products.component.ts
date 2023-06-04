import { Component, Input } from '@angular/core';
import { Product } from '../interface';
import { ProductService } from '../product.service';

@Component({
  // selector mówi o tym jak stworzyć taki component w html
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent {
  productService: ProductService;
  // tutaj zachodzi dependency injection, productService jest wstrzykiwany przez konstruktor (productService jest singletonem)
  constructor(productService: ProductService) {
    this.productService = productService;
  }

  productName = '';

  // to musi zostać podane przy deklaracji komponentu w pliku html w komponencie nadrzędnym czyli [products]="productService.products"
  @Input()
  products!: Product[];

  clickHandler() {
    this.productService.addNewProduct(this.productName);
  }

  delete(product: Product) {
    this.productService.deleteProduct(product.name);
  }
}
