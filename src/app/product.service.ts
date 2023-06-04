import { Injectable } from '@angular/core';
import { Product } from './interface';

@Injectable({
  providedIn: 'root',
})
// service moze byc uzywany w wielu componenetach jeśli tylko jest odpowiednia dodany do module.ts
export class ProductService {
  products: Product[] = [
    { name: 'produkt', description: 'dadasaefaf' },
    { name: 'tylko name', description: 'opis' },
  ];
  animals: Product[] = [{ name: 'dog' }, { name: 'cat' }];

  constructor() {}

  addNewProduct(productName: string) {
    // dorzucamy do tablicy nowy produkt (rerender listy wykona się automatycznie)
    this.products.push({ name: productName });
  }

  deleteProduct(productName: string) {
    // korzystamy z metody filter i nadpisujemy dotychczasową tablicę nową, nie zawierającą produktów o podanej nazwie
    this.products = this.products.filter((p) => p.name !== productName);
  }
}
