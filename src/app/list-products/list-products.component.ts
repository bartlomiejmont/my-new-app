import { Component, Input } from '@angular/core';
import { Product } from '../interface';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent {
  @Input()
  products!: Product[];

  clickHandler() {
    console.log('test');
  }
}
