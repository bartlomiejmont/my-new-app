import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductService } from './product.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ListProductsComponent],
  imports: [BrowserModule, FormsModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
