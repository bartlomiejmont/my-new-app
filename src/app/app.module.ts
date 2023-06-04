import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductService } from './product.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ListProductsComponent],
  // FormsModule - potrzebne do korzystania z ngModel
  imports: [BrowserModule, FormsModule],
  // ProductService - potrzebne do korzystania z servicu wewnątrz modułu (czyli w tym przypadku w całej aplikacji bo moduł jest 1)
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
