import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ProductComponent } from './product/product.component';
import { ListProductComponent } from './list-product/list-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ProductComponent,
    ListProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
