import { Injectable } from '@angular/core';
import { Product } from './interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    { name: 'produkt', description: 'dadasaefaf' },
    { name: 'tylko name', description: 'opis' },
  ];
  animals: Product[] = [{ name: 'dog' }, { name: 'cat' }];

  constructor() {}

  addNewProduct(productName: string) {
    this.products.push({ name: productName });
  }

  deleteProduct(productName: string) {
    this.products = this.products.filter((p) => p.name !== productName);
  }
}
