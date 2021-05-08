import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './pipes/covert-to-space.pipes';
import { FilterArray } from './pipes/filter-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,    
    ConvertToSpacesPipe,
    FilterArray
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
