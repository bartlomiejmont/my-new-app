import { Component } from '@angular/core';
import { Product } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products: Product[] = [
    { name: 'produkt', description: 'dadasaefaf' },
    { name: 'tylko name', description: 'opis' },
  ];
  animals: Product[] = [{ name: 'dog' }, { name: 'cat' }];
}
