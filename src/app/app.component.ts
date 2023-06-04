import { Component } from '@angular/core';
import { Product } from './interface';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public productService: ProductService) {}
}
